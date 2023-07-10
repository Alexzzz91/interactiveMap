// @ts-ignore-file
import * as React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import { searchStaffByFloor } from '../../../IndexedDB/staff/searchStaff';
import { searchPlacesByFloor } from '../../../IndexedDB/places/searchPlaces';
import { mapAppDb } from '../../../IndexedDB';
import { placesType } from '../../../../common/commonValues';
import { UserData } from '../../../gql/usersGql';

import { LevelDiv } from './styles/level.styled';
import { throttle } from '../../../../common/utils/throttle';
import { TooltipContent } from './TooltipContent';

export const MovementXSmbl = Symbol('movementX');
export const MovementYSmbl = Symbol('movementY');

type Props = {
  levelId: string;
  level: number;
  activeLevel: number;
  svg: string;
};

type UserDataWithWorkplaceId = Pick<UserData, 'workplaceid'> &  { workplaceid: string };

const defaultArray: string[] = [];

const Level: React.FC<Props> = (props) => {
  const { 
    activeLevel,
    level,
    svg,
  } = props;

  const { idPlace, idWorkplace, idPoster } = useParams<IParamsProps>();

  const history = useNavigate();

  const levelRef = React.useRef();
  const svgRef = React.useRef<HTMLElement>();

  const [tooltipContent, setTooltipContent] = React.useState('');
  const [currentLevel, setCurrentLevel] = React.useState(activeLevel);
  const [workplacesIsTaken, setWorkplacesIsTaken] = React.useState(defaultArray);
  const [unavailablePlaces, setUnavailablePlaces] = React.useState(defaultArray);

  React.useEffect(() => {
    if (level !== currentLevel) {
      return;
    }

    const search = async (level: string) => {
      const staff = await searchStaffByFloor({ level });
      const filteredStaff = staff.filter((re) => !!re.workplaceid) as UserDataWithWorkplaceId[];
      const workplacesIds = filteredStaff.map((re) => re.workplaceid);

      console.log('level', level);
      const places = await searchPlacesByFloor({ level });
      const unavailablePlaceIds = places
        .filter((place) => place.type === placesType.Unavailable)
        .map((place) => place.mapid) as string[];

      setWorkplacesIsTaken(workplacesIds);
      setUnavailablePlaces(unavailablePlaceIds);
    }

    const throttleSearch = throttle(() => search(activeLevel.toString()), 1000);
    mapAppDb.staff.hook("creating", throttleSearch);
    throttleSearch();

    return () => setWorkplacesIsTaken(defaultArray)
  }, [level, currentLevel]);

  React.useEffect(() => {
    if (!activeLevel) {
      setCurrentLevel(activeLevel);
      return;
    }

    setTimeout(() => setCurrentLevel(activeLevel), 410);
  }, [activeLevel]);

  const handleOnClick = React.useCallback(({ target }: { target: any }) => {
    let { workplaceid } = target.dataset;
    const { mapid } = target.dataset;
    
    if (mapid) {
      history(`/?fl=${level}&place=${mapid}`);
    }
    
    if (!mapid) {
      workplaceid = target.parentElement?.dataset?.workplaceid;

      if (!workplaceid) {
        workplaceid = target.parentElement?.parentElement?.dataset?.workplaceid;
      }
    }

    if (workplaceid) {
      history(`/?fl=${level}&wp=${workplaceid}`);
    }
  }, []);

  const handleMouseMove = React.useCallback(({ target }: { target: any }) => {
    let { workplaceid } = target.dataset;
    const { mapid  } = target.dataset;
    
    if (mapid) {
      setTooltipContent(`mapid=${mapid}`);
      return;
    }
    
    if (!mapid) {
      workplaceid = target.parentElement?.dataset?.workplaceid;

      if (!workplaceid) {
        workplaceid = target.parentElement?.parentElement?.dataset?.workplaceid;
      }
    }

    if (workplaceid) {
      setTooltipContent(`workplaceid=${workplaceid}`);
      return;
    }

    setTooltipContent('');
  }, [setTooltipContent]);

  React.useEffect(() => {
    if (svgRef.current) {
      svgRef.current.innerHTML = svg;

      const nPosition = {x: 0, y: 0};
      const point = {x: 0, y: 0};

      function svgSetMatrix(svgEl: ChildNode, nPosition: {x: number; y: number;}, scale: number) {
        // @ts-ignore
        svgEl.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${nPosition.x}, ${nPosition.y})`;
      }

      function svgScale(svgEl: ChildNode, fixedPoint: {x: number; y: number;}, scale: number, nextScale: number) {
        const position = {...nPosition};
     
        // console.log('position', position);

        const divis = nextScale / scale;

        // scale = nextScale;
  
        nPosition.x = divis * (position.x - fixedPoint.x) + fixedPoint.x;
        nPosition.y = divis * (position.y - fixedPoint.y) + fixedPoint.y;

        // console.log('nPosition', nPosition);

        svgSetMatrix(svgEl, nPosition, nextScale);
      }
      
      let scale = 1;

      if (level === currentLevel) {
        // mouse wheel, trackpad pitch
        svgRef.current.addEventListener('wheel', /** @param {WheelEvent} evt */ evt => {
            evt.preventDefault();
        
            // console.log('evt', evt)
            // // calc nextScale
        
            const delta = evt.deltaY || evt.deltaX;
            const scaleStep = Math.abs(delta) < 50
                ? 0.05  // touchpad pitch
                : 0.25; // mouse wheel
        
            const scaleDelta = delta < 0 ? scaleStep : -scaleStep;
            let nextScale = scale + scaleDelta; // 'scale' is previous scale
          
            if (nextScale > 4 || nextScale < 0.4) {
              return;
            }      
        
            // calc fixedPoint
            const fixedPoint = { x: evt.clientX, y: evt.clientY };
            
            // console.log('fixedPoint', fixedPoint);
            if (svgRef?.current?.firstChild) {
              svgScale(svgRef.current.firstChild, fixedPoint, scale, nextScale);
              scale = nextScale;
            }
        });
      }


      if (level === currentLevel) {
        let isMoved = false;

        svgRef.current.addEventListener('pointerdown',  evt => {
          evt.preventDefault();
          isMoved = true;
          // console.log('pointerdown evt', evt)
        });
  
        svgRef.current.addEventListener('pointermove',  evt => {
          
          if (!isMoved || svgRef.current?.firstChild) {
            return;
          }

          evt.preventDefault();

          if (!evt.movementX || !evt.movementY) {
            return;
          }

          // @ts-ignore
          evt[MovementXSmbl] = evt.movementX;
          // @ts-ignore
          evt[MovementYSmbl] = evt.movementY;

          // @ts-ignore
          point.x += evt[MovementXSmbl] / scale;
          // @ts-ignore
          point.y += evt[MovementYSmbl] / scale;

          nPosition.x = (nPosition.x - (nPosition.x + point.x)) * -1;
          nPosition.y = (nPosition.y - (nPosition.y + point.y)) * -1;

          // @ts-ignore
          svgSetMatrix(svgRef.current.firstChild, nPosition, scale)
        });

        svgRef.current.addEventListener('pointerup',  evt => {      
          isMoved = false;
          evt.preventDefault();

          // nPosition.x = evt.clientX;
          // nPosition.y = evt.clientY;
          // // calc nextScale
        });
      }
    }
  },[svgRef, level, currentLevel]);

  const svgComponent = (
    // @ts-ignore
    <span ref={svgRef} onClick={handleOnClick} style={level === currentLevel ? {
      // position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'block',
      position: 'relative',
      touchAction: 'none',
      backgroundColor: 'rgb(255, 255, 255)',
      userSelect: 'none',
      backgroundImage: 'radial-gradient(rgba(73, 80, 87, 0.6) 1px, transparent 0px)',
      backgroundSize: '24px 24px',
      backgroundPosition: '-105.611px -13.8394px',
    } : undefined }/>
  );

  const oweralyProps = {
    activelevel: activeLevel,
    level,
  };

  return (
    <LevelDiv
      {...oweralyProps}
      // @ts-ignore
      ref={levelRef} 
      currentArea={idPlace ? idPlace: undefined}
      currentWorkplace={idWorkplace ? idWorkplace: undefined}
      currentPoster={idPoster ? idPoster: undefined}
      workplacesIsTaken={workplacesIsTaken}
      unavailablePlaces={unavailablePlaces}
      onMouseMove={handleMouseMove}
      data-tip=""
    >
      {svgComponent}
      {!!tooltipContent && (
        <TooltipContent tooltipContent={tooltipContent} />
      )}
      <div>
        <button>
          +
        </button>
        <button>
          -
        </button>
      </div>
    </LevelDiv>
  );
};

export { Level };
