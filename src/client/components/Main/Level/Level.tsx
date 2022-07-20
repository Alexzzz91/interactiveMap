import * as React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IParamsProps } from '../../app';
import { searchStaffByFloor } from '../../../IndexedDB/staff/searchStaff';
import { searchPlacesByFloor } from '../../../IndexedDB/places/searchPlaces';
import { mapAppDb } from '../../../IndexedDB';
import { placesType } from '../../../../common/commonValues';
import { UserData } from '../../../gql/usersGql';

import { LevelDiv, LevelLink, LevelStyled } from './styles/level.styled';
import { throttle } from '../../../../common/utils/throttle';
import { TooltipContent } from './TooltipContent';

type Props = {
  levelId: string;
  level: number;
  activeLevel: number;
  svg: string;
};

type UserDataWithWorkplaceId = Pick<UserData, 'workplaceid'> &  { workplaceid: string };

const defaultArray: string[] = [];

const Level = (props: Props) => {
  const { 
    activeLevel,
    level,
    svg,
  } = props;

  const { idPlace, idWorkplace, idPoster } = useParams<IParamsProps>();

  const history = useHistory();

  const levelRef = React.useRef();
  const svgRef = React.useRef();

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
    const { mapid, posterid } = target.dataset;
    
    if (mapid) {
      history.push(`/fl${level}place${mapid}`);
    }
    
    if (!mapid) {
      workplaceid = target.parentElement?.dataset?.workplaceid;

      if (!workplaceid) {
        workplaceid = target.parentElement?.parentElement?.dataset?.workplaceid;
      }
    }

    if (workplaceid) {
      history.push(`/fl${level}wp${workplaceid}`);
    }

    if (posterid) {
      history.push(`/fl${level}poster${posterid}`);
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

  const svgComponent = (
    <LevelStyled
      // @ts-ignore
      ref={svgRef}
      svg={svg}
        // @ts-ignore
      onClick={handleOnClick}
      width="100%"
      height="100%"
    />
  );

  const oweralyProps = {
    activelevel: activeLevel,
    level,
  };

  if (level === currentLevel) {
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
      </LevelDiv>
    );
  }

  if (currentLevel) {
    return null;
  }

  return (
    <LevelLink
      {...oweralyProps}
      to={`/fl${level}`}
          // @ts-ignore
      ref={levelRef}
    >
      {svgComponent}
    </LevelLink>
  );
};

export { Level };
