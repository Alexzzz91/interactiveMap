// @ts-nocheck
import * as React from 'react';
import { useMutation, useApolloClient } from '@apollo/react-hooks';

import { Close } from '../../../../../common/components/icons';

import { IDbPlace } from '../../../../IndexedDB/places/loadPlaces';
import { placeNames } from '../../../../../common/commonValues';
import { deletePlace } from '../../../../../client/gql/placesGql';
import {
    PlaceNoticeStyled,
    PlaceStyled,
    PlaceTypeNameStyled,
    PlaceRowStyled,
    PlaceNameStyled,
    PlaceDescStyled,
    PlaceActionStyled,
} from './styles/place.styled';

type Props = {
    places: IDbPlace[];
}

const PlaceList: React.FC<Props> = ({ places }) => {
    const [deletePlaceMutation] = useMutation(deletePlace);
    const client = useApolloClient();

    const handleClick = async (id: string) => {
        try {
            await deletePlaceMutation({
                variables: {
                    id,
                }
            });
            client.resetStore();
        } catch (error) {
            console.error('error', error);
        }
    };

    return (
        <>
            <PlaceNoticeStyled>
                Место должно быть одно, пожалуйста удалите ненужные.
            </PlaceNoticeStyled>
            {places.length > 1 && places.map((place) => {
                return (
                    <PlaceStyled key={place.id}>
                        <PlaceRowStyled>
                            <PlaceNameStyled>
                                {place.name}
                                <PlaceTypeNameStyled>
                                    ({placeNames[place.type]})
                                </PlaceTypeNameStyled>
                            </PlaceNameStyled>
                            <PlaceDescStyled>
                                {place.textDescription}
                            </PlaceDescStyled>
                        </PlaceRowStyled>
                        <PlaceActionStyled
                            type="button"
                            onClick={() => handleClick(place.id)}
                        >
                            <Close />
                        </PlaceActionStyled>
                    </PlaceStyled>
                )}
            )}
        </>
    );
};

export { 
    PlaceList
};
