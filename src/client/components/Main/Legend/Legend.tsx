
import React from 'react'
import { useSearchParams } from 'react-router-dom';
import * as Icons from '../../../../common/components/icons/legendIcons';
import { searchPlacesByFloor } from '../../../IndexedDB/places/searchPlaces';
import {
  ContainerStyled,
  ListStyled,
  RowStyled,
  IconBlockContainerStyled,
  IconLabelStyled,
} from './styles/legend.styled';

const iconsMap: Record<string, string> = {
  Elevator : 'Elevator',
  MeetingRoom : 'MeetingRoom',
  ChillZone : 'Couch',
  Wardrobe : 'Wardrobe',
  TopManager : 'Chef',
  GameRoom : 'GammingRoom',
  Atm : 'Atm',
  ServerRoom : 'ServerRoom',
  ShowerRoom : 'Shower',
  Kiosk : 'Vkusvill',
  TalkingBooths : 'PersonBooth',
  Archive : 'Archive',
  Poster : 'Poster',
  Secretary : 'Reception',
  Printer : 'Printer',
  RecoveryBattery: 'RecoveryBattery',
  RecoveryBox: 'RecoveryBox',
};

const iconsTitleMap = {
  Elevator: 'лифт',
  MeetingRoom: 'переговорка',
  CoffeePoint: 'кофепоинт',
  Couch: 'чилл-зона',
  Female: 'женский туалет',
  Male: 'мужской туалет',
  Wardrobe: 'гардероб',
  Chef: 'топ-менеджер',
  Kitchen: 'кухня',
  GammingRoom: 'игровая',
  Atm: 'банкомат',
  ServerRoom: 'серверная',
  Shower: 'душевая',
  Vkusvill: 'вкусвилл',
  PersonBooth: 'будка переговоров',
  Archive: 'архив',
  Poster :'постер',
  Reception: 'Секретари/Ресепшн',
  Printer: 'принтер',
  RecoveryBattery: 'Батарейки на переработку',
  RecoveryBox: 'Контейнер для переработки',
};

const commonIcons = [
  'Elevator',
  'MeetingTable',
  'CoffeePoint',
  'Kitchen',
  'Female',
  'Male',
  'Umbrella',
  'Poster',
  'Printer',
];

const tablesMap = ['Table1', 'Table2', 'Table3', 'Table4'];

const Legend = () => {
  const [searchParams] = useSearchParams();
  const floorIndex = searchParams.get("fl"); // is the string "Jonathan Smith".

  console.log('floorIndex', floorIndex)
  console.log('Number(floorIndex)', Number(floorIndex))
  // const { floorIndex } = useParams<IParamsProps>();
  const [iconArray, setIconArray] = React.useState<string[]>([]);

  React.useEffect(() => {
    const loadPlaces = async () => {
      const places = await searchPlacesByFloor({level: floorIndex});
      const iconsName: string[] = [];

      places.forEach((place) => {
        if (place.type && !iconsName.includes(place.type)) {
          iconsName.push(place.type);
        }
      });

      setIconArray(iconsName);
    };

    loadPlaces();
  }, [floorIndex]);

  const iconsComponents = React.useMemo(() => {
    let icons = [...commonIcons, ...iconArray];

    const onlyUnique = (value: string, index: number, self: string[]) => self.indexOf(value) === index;
    icons = icons.filter(onlyUnique);

    return icons.map((icon: string) => {
      if (tablesMap.includes(icon)) {
        return null;
      }

      icon = !!iconsMap[icon] ? iconsMap[icon] : icon;

      // @ts-ignore 
      const IconComponent = Icons[icon];

      if (!IconComponent) {
        return null;
      }

      return (
        <RowStyled key={icon}>
          <IconBlockContainerStyled>
            <IconComponent />
          </IconBlockContainerStyled>
          <IconLabelStyled>
            {/* @ts-ignore */}
            {iconsTitleMap[icon]}
          </IconLabelStyled>
        </RowStyled>
      );
    }).filter(Boolean);
  }, [floorIndex, iconArray]);

  return (
    <ContainerStyled>
      <ListStyled>
        { iconsComponents }
      </ListStyled>
    </ContainerStyled>
  );
};

export { 
  Legend,
  tablesMap,
  iconsTitleMap,
};
