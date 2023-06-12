import * as React from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';

import { Level } from './Level/Level';
import { BackButton } from './BackButton/BackButton';
import { FloorData } from '../../gql/floorGql';
import { Auth } from '../../../common/auth/auth.h';
import { IParamsProps, AuthContext } from '../app';
import { Legend } from './Legend/Legend';
import { useMobileDetector } from '../../../common/hooks/useMobileDetector';
import { MobileContext } from '../../../common/contexts/MobileContext';
import { Loading } from '../../../common/components/Loading';
import { authHasRoleAdmin } from '../../../common/auth/auth';
import { useLocalStorage } from '../../../common/hooks/useLocalStorage';
import { parseQuery } from '../../../common/utils/queryParser';

import { 
  MainContainerStyled,
  MallStyled,
  LevelsStyled,
  TopRightBarStyled,
  GoToEditorLinkStyled,
  GoToEditorButtonStyled,
  ClearPlacesStyled,
  PlanTopRowStyled,
  NoFloorsMesageStyled,
} from './styles/main.styled';
import { CityAddressRow } from '../common/CityAddressRow';

type MainProps = {
    floors: FloorData[]
    currentCity?: string;
    currentAddress?: string;
};

const Main: React.FC<MainProps>  = ({ floors, currentCity, currentAddress }) => {
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();
  const { canEdit } = parseQuery(search);

  // @ts-ignore
  const auth = React.useContext<Auth | null>(AuthContext);
  // @ts-ignore
  const showEditButton = authHasRoleAdmin(auth);
  const [forceShowEditButton, setForceShowEditButton] = useLocalStorage('canEdit', typeof canEdit === 'string' ? canEdit : '0' );

  React.useEffect(() => {
    if (typeof canEdit === 'string' && canEdit === '1') {
      setForceShowEditButton(canEdit);
    }
  }, [canEdit, setForceShowEditButton]);

  const { 
    // floorIndex,
    idPlace,
    idWorkplace,
    idPoster,
  } = useParams<IParamsProps>();

  console.log('search', search)
  console.log('searchParams', searchParams)
  const floorIndex = searchParams.get("fl"); // is the string "Jonathan Smith".

  console.log('floorIndex', floorIndex)
  console.log('Number(floorIndex)', Number(floorIndex))

  const isMobile = useMobileDetector(MobileContext);

  return (
    <React.Suspense fallback={<Loading />}>
        <MainContainerStyled>
          <MallStyled>
            <PlanTopRowStyled>

              <CityAddressRow />

              {!!floorIndex && (
                <BackButton floorIndex={floorIndex} />
              )}
              {!!floorIndex && (idPlace || idWorkplace || idPoster) && (
                <ClearPlacesStyled to={`/?fl=${floorIndex}`} >
                  Снять выделение
                </ClearPlacesStyled>
              )}
            </PlanTopRowStyled>
            <TopRightBarStyled>
              {(!!floorIndex && !isMobile) && (showEditButton || forceShowEditButton == 1) && (
                <GoToEditorLinkStyled 
                  as={Link} 
                  to={`/editor${pathname}`} 
                  title='Перейти в редактор'
                >
                  <GoToEditorButtonStyled/>
                </GoToEditorLinkStyled>
              )}
            </TopRightBarStyled>

            {/* {!isThreePlan && ( */}
            {!!floors.length && (
              <LevelsStyled floor={Number(floorIndex)}>
                {floors.map((fl, i) => (
                  <Level
                    key={fl.id}
                    levelId={fl.id}
                    level={i + 1}
                    activeLevel={Number(floorIndex || 0)}
                    // @ts-ignore
                    svg={fl.levelSchema}
                  />
                ))}
              </LevelsStyled>
            )}
            {!floors.length && !!currentCity && !!currentAddress &&(
              <NoFloorsMesageStyled>
                У вас нет планов этажей &nbsp;
                <GoToEditorLinkStyled
                  as={Link} 
                  to={`/editor/add`} 
                  title='Перейти в редактор'
                >
                  &nbsp; Добавить этаж?
                </GoToEditorLinkStyled>
              </NoFloorsMesageStyled>
            )}
            {!floors.length && (!currentCity || !currentAddress) &&(
              <NoFloorsMesageStyled>
                Выберите город и адрес
              </NoFloorsMesageStyled>
            )}
          </MallStyled>

          {floorIndex && (
            <Legend />
          )}
        </MainContainerStyled>
      </React.Suspense>
  );
};

export { Main };
