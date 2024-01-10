import React from 'react'
import {
    FloorIconStyled, FloorValueStyled,
    ImageStyled,
    Item,
    NameColStyled,
    FlorTouchStyled,
} from './styles/searchItem.styled';
import { UserData } from '../../../../gql/usersGql';
import { DepartmentData } from '../../../../gql/departmentsGql';
import { PlaceData } from '../../../../gql/placesGql';

type ISearchItemProps = {
    data: UserData | DepartmentData | PlaceData;
    onClick(): void;
};

const SearchItem: React.FC<ISearchItemProps> = ({
    data,
    onClick,
}) => {
    let { name } = data;

    let floor =  'H';
    let imageSrc;
    let link = '#';

    switch (data?.__typename) {
        case 'User': {
            imageSrc = data.avatar;

            if (!name) {
                name = data.username;
            }

            if (!!data.floor && !!data.workplaceid) {
                floor = `${data?.floor}`;
                link = `/fl${data.floor}wp${data.workplaceid}`;
                break;
            } else if (!!data.floor && !data.workplaceid && !!data.mapid) {
                floor = `${data?.floor}`;
                link = `/fl${data.floor}place${data.mapid}`;
                break;
            }

            link = `/us_${data.id}`;
            break;
        }

        case 'Place': 
        case 'Department': {
            if (!data.level || !data.mapid) {
                break;
            }

            floor = `${data.level}`;
            link = `/fl${data.level}place${data.mapid}`;
            break;
        }
    
        default:
            break;
    }

    return (
        <Item 
            to={link} 
            onClick={onClick}
        >
            <NameColStyled>
                <ImageStyled src={imageSrc}/>
                {name}
            </NameColStyled>
            <FlorTouchStyled>
                <FloorIconStyled/>

                {!!floor && (
                    <FloorValueStyled>
                        {floor}
                    </FloorValueStyled>
                )}
            </FlorTouchStyled>
        </Item>
    );
};

export { SearchItem };