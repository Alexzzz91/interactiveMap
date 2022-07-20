import * as React from 'react';
import { 
  useParams,
} from 'react-router-dom';
import { SearchBlock } from './Search/Search';
import { UserContainer } from './User/UserContainer';
import { Facts } from './Facts/Facts';
import { Staff } from './Staff/Staff';
import { PlaceContainer } from './Place/PlaceContainer';
import { DepartmentContainer } from './Department/DepartmentContainer';
import { IParamsProps } from '../app';
import { Poster } from './Poster/Poster';
import { useClearAll } from '../../../common/utils/clearAll';
import { PersonContainer } from './Person/PersonContainer';
import { WorkplaceContainer } from './Workplace/WorkplaceContainer';
import { useMobileDetector } from '../../../common/hooks/useMobileDetector';
import { MobileContext } from '../../../common/contexts/MobileContext';
import {
  AsideStyled,
  TopBlockStyled,
  ListInnerStyled,
  PlaceAndDepartmentsContainerStyled,
  UpdateButtonStyled,
  MobileButtonStyled,
} from './styles/aside.styled';
import { Events } from './Events/Events';
import { EventBlock } from './Events/EventBlock';

const Aside: React.FC = () => {
  const { 
    floorIndex,
    idPlace,
    userId,
    idPoster,
    idWorkplace,
  } = useParams<IParamsProps>();

  const [view, setView] = React.useState(false);

  const isMobile = useMobileDetector(MobileContext);
  const handleUpdateClick = React.useCallback(() => useClearAll(), []);
  const handleChangeView = React.useCallback(() => setView((prevState) => !prevState), []);

  return (
    <AsideStyled openView={view}>
      {isMobile && (
        <MobileButtonStyled onClick={handleChangeView}/>
      )}
      <ListInnerStyled>
        <TopBlockStyled>
          <SearchBlock/>
          <Events />
        </TopBlockStyled>

        {(!!idWorkplace || (!idPoster && !!idPlace)) && (
          <EventBlock />
        )}

        {(!idPoster && !!idPlace) && ( 
          <PlaceAndDepartmentsContainerStyled>
            <PlaceContainer />
            <DepartmentContainer />
          </PlaceAndDepartmentsContainerStyled>
        )}

        {((!idPoster && !idPlace ) && !!floorIndex && !idWorkplace ) && (
          <Staff/>
        )}

        {!!idPoster && (
          <Poster />
        )}

        {!!userId && (
          <PersonContainer />
        )}

        {!!idWorkplace && (
          <WorkplaceContainer />
        )}

       {(!idPlace && !floorIndex && !userId) && ( <Facts /> )}
        <UserContainer />
        <UpdateButtonStyled onClick={handleUpdateClick}>
          Обновить все данные
        </UpdateButtonStyled>
      </ListInnerStyled>
    </AsideStyled>
  );
};

export { 
  Aside
};
