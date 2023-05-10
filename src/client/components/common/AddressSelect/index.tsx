import * as React from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

import { gql, useMutation, useQuery } from '@apollo/react-hooks';
import { addressQuery, AddressQueryData, createAddress } from '../../../gql/addressGql';
import { Input } from '../../../../common/components/input/Input';
import { CityQueryData, cityQuery } from '../../../gql/cityGql';
import { toastOptions, ParamsContext } from '../../app';

import { 
  AddressSelectStyled,
  NoAddressMesageLinkStyled,
  NoAddressMesageStyled,
} from './styles/addressSelect.styled';
import { 
  NewAddressModalButtonCloseStyled,
  NewAddressModalButtonStyled,
  NewAddressModalStyled,
  NewAddressModalTitleStyled,
} from './styles/addressModal.styled';

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

const AddressRowContainer: React.FC = (_props) => {
  const { data: addressData } = useQuery<AddressQueryData>(addressQuery, {
    fetchPolicy: 'network-only'
  });
  const { data: citiesData } = useQuery<CityQueryData>(cityQuery);

  const { currentAddress, setCurrentAddress } = React.useContext(ParamsContext);

  const [address, setAddress] = React.useState(currentAddress);

  const handleSelectValue = React.useCallback((eventType: string) => {
    setAddress(eventType)
    setCurrentAddress(eventType);
  }, [setAddress, setCurrentAddress]);

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

  const [newAddress, setNewAddress] = React.useState({
    name: '',
    textDescription: '',
    city: '',
  });

  const [createAddressMigration] = useMutation(createAddress, {
    update(cache, { data: { createAddress } }) {
      cache.modify({
        fields: {
          addresses(existingAddresses = []) {
            const newAddressesRef = cache.writeFragment({
              data: createAddress,
              fragment: gql`
                fragment NewAddress on addresses {
                  id
                  name
                  textDescription
                  city {
                    id
                    name
                  }
                }
              `
            });

            return [...existingAddresses, newAddressesRef];
          }
        }
      });
    }
  });
  const handlerCreateNewAddress = React.useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        await createAddressMigration({
            variables: { ...newAddress }
        });
        
        closeModal();
        
        toast.info(`Адрес успешно создан`, toastOptions);
    } catch (error) {
        
    }
  }, [createAddressMigration, newAddress, closeModal]);

  const setValue = React.useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    event.preventDefault();
    const { currentTarget } = event;

    // @ts-ignore
    const fieldName = currentTarget?.attributes['name']?.value!;
    
    if (!fieldName) {
      return;
    }

    setNewAddress((prevState) => ({
      ...prevState,
      [fieldName]: currentTarget.value,
    }));
  }, [setNewAddress]);

  const handleSelectCity = React.useCallback((eventType: string) => {
    setNewAddress((prevState) => ({
      ...prevState,
      city: eventType,
    }));
  }, [setNewAddress]);  

  return (
    <>
        {!addressData?.addresses.length && !addressData?.addresses[0] && (
          <>
            <NoAddressMesageStyled>
                Нет адреса, <NoAddressMesageLinkStyled onClick={openModal}> Добавить адрес? </NoAddressMesageLinkStyled>
            </NoAddressMesageStyled>
          </>
        )}
        {!!addressData?.addresses.length && (
          <>
            <AddressSelectStyled
                value={address}
                onChange={handleSelectValue}
                name='address'
                placeholder='Выберите Адрес'
                items={addressData?.addresses.map((address) => ({title: address.name, value: address.id}))}
            />
            <NoAddressMesageLinkStyled onClick={openModal}> Добавить адрес? </NoAddressMesageLinkStyled>
          </>
        )}

      <NewAddressModalStyled
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Добавить Адрес"
      >
        <NewAddressModalTitleStyled>Добавить Адрес</NewAddressModalTitleStyled>
        <NewAddressModalButtonCloseStyled onClick={closeModal}>close</NewAddressModalButtonCloseStyled>

        <form onSubmit={handlerCreateNewAddress}>
          <Input
            value={newAddress.name || ''}
            type="text"
            name="name"
            onChange={setValue}
          />
          <Input
            value={newAddress.textDescription || ''}
            name="textDescription"
            placeholder='Подробности к адресу'
            onChange={setValue}
          />

          <AddressSelectStyled
            value={newAddress.city}
            onChange={handleSelectCity}
            name='city'
            placeholder='Выберите Город'
            items={citiesData?.cities.map((address) => ({title: address.name, value: address.id})) || []}
          />

          <NewAddressModalButtonStyled role='submit'>
            Сохранить
          </NewAddressModalButtonStyled>
        </form>
      </NewAddressModalStyled>
    </>
  );
};

export { AddressRowContainer };
