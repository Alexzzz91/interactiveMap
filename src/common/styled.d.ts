import 'styled-components';

type ThemeColors = {
    london: string;
    fes: string;
    jaffa: string;
    dili: string;
    nara: string;
    tanga: string;
    santiago: string;
    beirut: string;
    kano: string;
    muar: string;
    osaka: string;
    kabul: string;
    sofia: string;
    ibiza: string;
    varna: string;
    berbera: string;
    dublin: string;
    axum: string;
    mexico: string;
    tbilisi: string;
    havana: string;
    alexandria: string;
    victoria: string;
    kediri: string;
    pattani: string;
    madrid: string;
    argos: string;
    baku: string;
    palermo: string;
    darwin: string;
    adelaide: string;
    hanoi: string;
    sydney: string;
    hobart: string;
    moroni: string;
    worms: string;
    homs: string;
    kutaisi: string;
    flores: string;
    rey: string;
    nitra: string;
    metz: string;
    york: string;
    rome: string;
    facebook: string;
    vkontakte: string;
    twitter: string;
    googleplus: string;
    odnoklassniki: string;
    instagram: string;
    yandex_yellow: string;
    yandex_red: string;
    mailru_blue: string;
    mailru_gold: string;
    telegram: string;
    whatsapp: string;
    messenger: string;
    viber: string;
    citibank: string;
    gazprombank: string;
    vtb24: string;
    uralsib: string;
    psbbank: string;
    open: string;
    unicredit: string;
    tinkoff: string;
    sberbank: string;
    mkb: string;
    rosbank: string;
    alfabank: string;
    raifeisen: string;
    paypal: string;
    planeta: string;
    samsung: string;
    varna_low: string;
    berbera_low: string;
    dublin_low: string;
    axum_low: string;
    tbilisi_low: string;
    madrid_low: string;
    kano_low: string;
    kutaisi_low: string;
    beirut_low: string;
    hanoi_low: string;
    sofia_low: string;
    alexandria_low: string;
    rome_low: string;
    samsung_low: string;
};

declare module 'styled-components' {
    export interface DefaultTheme {
        color: ThemeColors;
    }
}

export type {
    ThemeColors,
}