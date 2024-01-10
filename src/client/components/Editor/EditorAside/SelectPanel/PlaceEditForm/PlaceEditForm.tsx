// @ts-nocheck
import React from 'react'
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { 
    useApolloClient,
    useMutation,
} from '@apollo/client';

import { IParamsProps, toastOptions } from '../../../../app';
import { UploadPicture, UploadPictureResult } from '../../../../../../common/components/upload/UploadPicture';
import { Input } from '../../../../../../common/components/input/Input';
import { TextEditor } from '../../../../../../common/components/input/TextEditor';
import {
    FormStyled,
    LabelStyled,
} from './styles/placeEditForm.styled';
import { FastSearch } from '../../FastSearch/FastSearch';
import {
    placeNames,
    placeСompositionNames,
    placeСompositionIcons,
} from '../../../../../../common/commonValues';
import { IDbPlace, updatePlace } from '../../../../../IndexedDB/places/loadPlaces';
import { updateOrCreatePlace, placeUploadImage } from '../../../../../gql/placesGql';
import { Checkbox } from '../../../../../../common/components/Checkbox/Checkbox';
import * as PlaceIcons from '../../../../../../common/components/icons/placeIcons';
import {
    FormSelectPanelStyled,
    HeaderStyled,
    FooterStyled,
    ButtonStyled,
} from '../styles/selectPanel.styled';

type Props = {
    selectedType: string;
    place?: IDbPlace;
    mapid: number;
    onCloseClick(): void;
}

const CapacityIcon = PlaceIcons['Capacity'];

const PlaceEditForm: React.FC<Props> = (props) => {
    const { 
        selectedType,
        place,
        mapid,
        onCloseClick,
    } = props;

    const apolloClient = useApolloClient();

    const [placeUploadImageMutation] = useMutation(placeUploadImage);
    const [updateOrCreatePlaceMutation] = useMutation(updateOrCreatePlace);

    const { floorIndex } = useParams<IParamsProps>();
    const [newPlace, setNewPlace] = React.useState<IDbPlace & {uploadedImage?: string}>({
        capacity: 0,
        ...place, 
        type: selectedType ? selectedType : place.type, 
        mapid: mapid?.toString(),
    });

    const handleClickSave = React.useCallback(
        async (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (newPlace.uploadedImage) {
            const { data } = await placeUploadImageMutation({
                variables: {
                    file: newPlace.uploadedImage
                }
            });

            const { placeUploadImage } = data;

            newPlace.image = placeUploadImage.url;
        }

        if (newPlace.capacity) {
            newPlace.capacity = newPlace.capacity.toString();
        }

        const { data } = await updateOrCreatePlaceMutation({
            variables: {
                ...newPlace, 
                floorIndex
            }
        })

        const { updateOrCreatePlace } = data;
        
        await updatePlace(updateOrCreatePlace);

        apolloClient.resetStore();

        onCloseClick()

        // @ts-ignore
        toast.info(`Изменение сохранено`, toastOptions);
    }, [
        updateOrCreatePlaceMutation,
        newPlace,
        onCloseClick,
        placeUploadImageMutation,
        apolloClient,
    ]);
    
    const handleClearClick = React.useCallback(() => onCloseClick(), [onCloseClick]);

    const setValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        const { currentTarget } = event;
        const fieldName = currentTarget?.attributes['name']?.value;
        
        if (!fieldName) {
            return;
        }

        setNewPlace((prevState) => ({
            ...prevState,
            [fieldName]: currentTarget.value,
        }));
    }, [setNewPlace]);

    const setDescription = React.useCallback((string) => {
        setNewPlace((prevState) => ({
            ...prevState,
            textDescription: string,
        }));
    }, [setNewPlace]);

    const setValueFromImageUploader = React.useCallback((result: UploadPictureResult) => {
        if (!result) {
            setNewPlace((prevState) => ({
                ...prevState,
                uploadedImage: null,
            }));

            return;
        }

        setNewPlace((prevState) => ({
            ...prevState,
            uploadedImage: result.img,
        }));
    }, [setNewPlace]);

    const handleClickCheckbox = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        const { currentTarget } = event;
        const fieldName = currentTarget?.attributes['name']?.value;

        if (!fieldName) {
            return;
        }
        
        setNewPlace((prevState) => {
            return {
                ...prevState,
                [fieldName]: !prevState[fieldName],
            }
        });
    }, [setNewPlace]);

    const {
        hasAppleTv,
        hasBoard,
        hasCoffeeMachine,
        hasFridge,
        hasMicrowave,
        hasTable,
        hasTv,
        hasWindowsPc,
        hasSink,
        hasArmchair,
        hasChair,
        hasCooler,
    } = newPlace;

    const checkboxes = {
        hasAppleTv,
        hasBoard,
        hasCoffeeMachine,
        hasFridge,
        hasMicrowave,
        hasTable,
        hasTv,
        hasWindowsPc,
        hasSink,
        hasArmchair,
        hasChair,
        hasCooler,
    };

    return (
        <FormSelectPanelStyled onSubmit={handleClickSave}>
            <HeaderStyled>
                <FastSearch
                    searchValue={selectedType ? placeNames[selectedType] : placeNames[newPlace.type]}
                    displayOnly={true}
                    handleClearClick={handleClearClick}
                />
            </HeaderStyled>
            <FormStyled>
                <UploadPicture 
                    value={newPlace.image}
                    onChange={setValueFromImageUploader}
                />
                <Input 
                    value={newPlace.name || ''}
                    type="text"
                    name="name"
                    onChange={setValue}
                />
                <TextEditor
                    value={newPlace.textDescription || ''}
                    name="textDescription"
                    onChange={setDescription}
                />
                <LabelStyled>
                    <Checkbox
                        checked={newPlace.showCapacity}
                        name='showCapacity'
                        onChange={handleClickCheckbox}
                    />
                    <Input
                        value={newPlace.capacity || 0}
                        type="number"
                        name="capacity"
                        onChange={setValue}
                    />

                    <CapacityIcon />

                    Вместимость человек
                </LabelStyled>
                <>
                    {Object.entries(checkboxes).map(([key, checked]) => {
                        const iconName = placeСompositionIcons[key];
                        const IconComponent = iconName && PlaceIcons[iconName];

                        return (
                            <LabelStyled key={key}>
                                <Checkbox
                                    checked={!!checked}
                                    name={key}
                                    onChange={handleClickCheckbox}
                                />
                                {IconComponent && (
                                    <IconComponent />
                                )}
                                {placeСompositionNames[key]}
                            </LabelStyled>
                        );
                    })}
                </>
            </FormStyled>
            <FooterStyled>
                <ButtonStyled onClick={handleClickSave}>
                    Сохранить
                </ButtonStyled>
            </FooterStyled>
        </FormSelectPanelStyled>
    );
};

export { 
    PlaceEditForm
};
