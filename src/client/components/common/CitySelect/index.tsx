import * as React from 'react';
import Modal from 'react-modal';
import { toast, ToastOptions } from 'react-toastify';

import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import { CityQueryData, cityQuery, createCity } from '../../../gql/cityGql';
import { Input } from '../../../../common/components/input/Input';
import { toastOptions, ParamsContext } from '../../app';

import { 
  CitiesSelectStyled, 
  NoCitiesMesageStyled, 
  NoCitiessMesageLinkStyled,
} from './styles/citySelect.styled';
import {
  NewCityModalButtonCloseStyled,
  NewCityModalButtonStyled,
  NewCityModalStyled,
  NewCityModalTitleStyled,
} from './styles/cityModal.styled';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

const CityRowContainer: React.FC = (_props) => {
  const { data: citiesData } = useQuery<CityQueryData>(cityQuery, {
    fetchPolicy: 'network-only'
  });
  
  const { currentCity, setCurrentCity, setCurrentAddress } = React.useContext(ParamsContext);

  const [city, setCity] = React.useState(currentCity);
 
  const handleSelectValue = React.useCallback((eventType: string) => {
    setCity(eventType);
    setCurrentCity(eventType);
    setCurrentAddress('');
  }, [setCity, setCurrentCity]);

  // let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }


  const [newCity, setNewCity] = React.useState({
    name: '',
    textDescription: '',
  });

  const [createCityMigration] = useMutation(createCity, {
    update(cache, { data: { createCity } }) {
      cache.modify({
        fields: {
          cities(existingCities = []) {
            const newCityRef = cache.writeFragment({
              data: createCity,
              fragment: gql`
                fragment NewCity on cities {
                  id
                  name
                  textDescription
                }
              `
            });

            return [...existingCities, newCityRef];
          }
        }
      });
    }
  });

  const handlerCreateNewCity = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await createCityMigration({
            variables: { ...newCity }
        });

        closeModal();

        toast.info(`Город успешно создан`, toastOptions as ToastOptions);
    } catch (error) {
        
    }
  }, [createCityMigration, newCity]);

  const setValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    // @ts-ignore
    const fieldName = currentTarget?.attributes['name']?.value!;
    
    if (!fieldName) {
      return;
    }

    setNewCity((prevState) => ({
      ...prevState,
      [fieldName]: currentTarget.value,
    }));
  }, [setNewCity]);

  return (
    <>
      {!citiesData?.cities.length && !citiesData?.cities[0] && (
        <>
          <NoCitiesMesageStyled>
              Нет городов, <NoCitiessMesageLinkStyled onClick={openModal}> Добавить город? </NoCitiessMesageLinkStyled>
          </NoCitiesMesageStyled>
        </>
      )}
      {!!citiesData?.cities.length && (
       <>
          <CitiesSelectStyled
            value={city}
            onChange={handleSelectValue}
            name='city'
            placeholder='Выберите Город'
            items={citiesData?.cities.map((address) => ({title: address.name, value: address.id}))}
          />
          <NoCitiessMesageLinkStyled onClick={openModal}> Добавить город? </NoCitiessMesageLinkStyled>
        </>
      )}
      <NewCityModalStyled
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Добавить город"
      >
        <NewCityModalTitleStyled>Добавить город</NewCityModalTitleStyled>
        <NewCityModalButtonCloseStyled onClick={closeModal}>close</NewCityModalButtonCloseStyled>

        <form onSubmit={handlerCreateNewCity}>
          <Input
            value={newCity.name || ''}
            type="text"
            name="name"
            onChange={setValue}
          />
          <Input
            value={newCity.textDescription || ''}
            name="textDescription"
            placeholder='Подробности к городу'
            onChange={setValue}
          />

          <NewCityModalButtonStyled role='submit'>
            Сохранить
          </NewCityModalButtonStyled>
        </form>
      </NewCityModalStyled>
    </>
  );
};

export { CityRowContainer };
