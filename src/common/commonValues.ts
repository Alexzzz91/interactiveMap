import { ThemeColors } from "./styled";

enum placesType {
    MeetingRoom= 'MeetingRoom',
    Toilet= 'Toilet',
    Elevator= 'Elevator',
    EatingFacilities= 'EatingFacilities',
    GameRoom= 'GameRoom',
    Security= 'Security',
    Wardrobe= 'Wardrobe',
    Hallway= 'Hallway',
    Atm= 'Atm',
    ShowerRoom= 'ShowerRoom',
    Kiosk= 'Kiosk',
    TalkingBooths= 'TalkingBooths',
    TopManager= 'TopManager',
    Archive= 'Archive',
    ChillZone= 'ChillZone',
    ServerRoom= 'ServerRoom',
    Secretary= 'Secretary',
    Printer= 'Printer',
    RecoveryBattery= 'RecoveryBattery',
    RecoveryBox= 'RecoveryBox',
    Unavailable= 'Unavailable',
};

const placeNames = {
    [placesType.MeetingRoom]: 'Переговорные',
    [placesType.Toilet]: 'Туалет',
    [placesType.Elevator]: 'Лифт',
    [placesType.EatingFacilities]: 'Кухня/Столовая',
    [placesType.ChillZone]: 'Чилл зона',
    [placesType.Wardrobe]: 'Гардероб',
    [placesType.GameRoom]: 'Игровая комната',
    [placesType.Atm]: 'Банкомат',
    [placesType.Security]: 'Охрана',
    [placesType.ShowerRoom]: 'Душевая',
    [placesType.Kiosk]: 'Киоск',
    [placesType.TalkingBooths]: 'Переговорная будка',
    [placesType.TopManager]: 'Топ менеджер',
    [placesType.Archive]: 'Архив',
    [placesType.ServerRoom]: 'Серверная',
    [placesType.Secretary]: 'Секретари/Ресепшн',
    [placesType.Printer]: 'Принтер',
    [placesType.RecoveryBattery]: 'Батарейки на переработку',
    [placesType.RecoveryBox]: 'Контейнер для переработки',
    [placesType.Unavailable]: 'Недоступно',
};

enum placeСomposition {
    Capacity = 'capacity',
    HasSink = 'hasSink',
    HasArmchair = 'hasArmchair',
    HasChair = 'hasChair',
    HasAppleTv = 'hasAppleTv',
    hasBoard = 'hasBoard',
    HasCoffeeMachine = 'hasCoffeeMachine',
    HasCooler = 'hasCooler',
    HasFridge = 'hasFridge',
    HasMicrowave = 'hasMicrowave',
    HasTable = 'hasTable',
    HasTv = 'hasTv',
    HasWindowsPc = 'hasWindowsPc',
};

const placeСompositionIcons = {
    [placeСomposition.Capacity]: 'Capacity',
    [placeСomposition.HasSink]: 'Sink',
    [placeСomposition.HasArmchair]: 'Armchair',
    [placeСomposition.HasChair]: 'Chair',
    [placeСomposition.HasAppleTv]: 'Appletv',
    [placeСomposition.hasBoard]: 'Board',
    [placeСomposition.HasCoffeeMachine]: 'CoffeeMachine',
    [placeСomposition.HasCooler]: 'Cooler',
    [placeСomposition.HasFridge]: 'Fridge',
    [placeСomposition.HasMicrowave]: 'Microwave',
    [placeСomposition.HasTable]: 'Table',
    [placeСomposition.HasTv]: 'Tv',
    [placeСomposition.HasWindowsPc]: 'Windows',
};

const placeСompositionNames = {
    [placeСomposition.Capacity]: 'Человеко-вместимость',
    [placeСomposition.HasSink]: 'Раковина',
    [placeСomposition.HasArmchair]: 'Кресла',
    [placeСomposition.HasChair]: 'Стулья',
    [placeСomposition.HasAppleTv]: 'Apple TV',
    [placeСomposition.hasBoard]: 'Маркерная доска',
    [placeСomposition.HasCoffeeMachine]: 'Кофемашина',
    [placeСomposition.HasCooler]: 'Кулеры для воды',
    [placeСomposition.HasFridge]: 'Холодильник',
    [placeСomposition.HasMicrowave]: 'Микроволновая печь',
    [placeСomposition.HasTable]: 'Стол',
    [placeСomposition.HasTv]: 'Телевизор/Экран',
    [placeСomposition.HasWindowsPc]: 'Windows PC',
};

const placeColors = {
    meetingRoom: '#FCE3FA',
    toulet: '#DEF2FF',
    department: '#F0FFEE',
    workPlace: '#ffffff',
    stairsAndLifts: '#EDE9FF',
    elevator: '#EDE9FF',
    eatingFacilities: '#FFF2DC',
    chillZone: '#fff3f0',
    wardrobe: '#FFBAAB',
    hallway: '#E8E8E8',
    gameRoom: '#73A32F',
    security: '#1a143b',
    atm: '#f03226',
    showerRoom: '#12427a',
    kiosk: '#a9d171',
    talkingBooths: '#ffded6',
    topManager: '#d7ebbc',
    poster: '#25213F',
    specialRoom: '#f7f5ff',
};

enum eventsType {
    Celebration= 'Celebration',
    Breaking = 'Breakdown',
    NeedCleaning = 'NeedCleaning',
    Meeting = 'Meeting',
};

const eventsName = {
    [eventsType.Celebration]: 'Праздник',
    [eventsType.Breaking]: 'Поломка',
    [eventsType.NeedCleaning]: 'Нужна уборка',
    [eventsType.Meeting]: 'Встреча',
};

const themeColors: ThemeColors = {
    london: "#25213F",
    fes: "#938DB7",
    jaffa: "#5F5887",
    dili: "#C8C3E8",
    nara: "#E7E3FF",
    tanga: "#3A355A",
    santiago: "#F6F5FF",
    santiago_low: "#fbfbff",
    beirut: "#73A32F",
    kano: "#FF6E94",
    muar: "#FF8469",
    osaka: "#000000",
    kabul: "#110e20",
    sofia: "#ffffff",
    ibiza: "#110d2b",
    varna: "#281f55",
    berbera: "#3c3075",
    dublin: "#6152a8",
    axum: "#968acf",
    mexico: "#c8c0ed",
    tbilisi: "#e5e1fc",
    havana: "#f7f5ff",
    alexandria: "#00a5ff",
    victoria: "#0171ff",
    kediri: "#360311",
    pattani: "#9e0b32",
    madrid: "#f8104d",
    argos: "#ffb3c7",
    baku: "#ffdbe5",
    palermo: "#fff2f6",
    darwin: "#300900",
    adelaide: "#b33012",
    hanoi: "#ff542e",
    sydney: "#ffbaab",
    hobart: "#ffded6",
    moroni: "#fff3f0",
    worms: "#0d1404",
    homs: "#2e4014",
    kutaisi: "#4a6623",
    flores: "#a9d171",
    rey: "#d7ebbc",
    nitra: "#f2f7eb",
    metz: "#FFFFFF",
    york: "#a869f0",
    rome: "#e6ae2e",
    facebook: "#3b5998",
    vkontakte: "#52749a",
    twitter: "#1da1f2",
    googleplus: "#db4437",
    odnoklassniki: "#ee8208",
    instagram: "#c13584",
    yandex_yellow: "#ffcc00",
    yandex_red: "#ff0000",
    mailru_blue: "#115ff9",
    mailru_gold: "#ffa520",
    telegram: "#0088cc",
    whatsapp: "#25d366",
    messenger: "#0078ff",
    viber: "#7360f2",
    citibank: "#003b70",
    gazprombank: "#02356c",
    vtb24: "#0a2972",
    uralsib: "#1e398d",
    psbbank: "#2647a3",
    open: "#00bbe4",
    unicredit: "#e30613",
    tinkoff: "#231f20",
    sberbank: "#1a9f29",
    mkb: "#b3002d",
    rosbank: "#e7002a",
    alfabank: "#f03226",
    raifeisen: "#fff104",
    paypal: "#0070ba",
    planeta: "#3498db",
    samsung: "#1428a0",
    varna_low: "#1e1843",
    berbera_low: "#251d4e",
    dublin_low: "#31285e",
    axum_low: "#423a6a",
    tbilisi_low: "#5b5679",
    madrid_low: "#611341",
    kano_low: "#633157",
    kutaisi_low: "#292e33",
    beirut_low: "#364237",
    hanoi_low: "#632837",
    sofia_low: "#5e5973",
    alexandria_low: "#12427a",
    rome_low: "#5b4537",
    samsung_low: "#181a5b",
};

const darkThemeColors: ThemeColors = {
    ...themeColors,
    kabul: "#aaa0ea",
    sofia: "#25213F",
    santiago:  "#2d265a",
    santiago_low: "#181629",
    london: '#fbfbff',
    nara:  "#251d5a",
};

export {
    placesType,
    placeNames,
    placeColors,
    themeColors,
    darkThemeColors,
    placeСomposition,
    placeСompositionIcons,
    placeСompositionNames,
    eventsType,
    eventsName,
}