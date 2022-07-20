import { shortMounthsMm } from "../../../common/utils/dateHelpers";
import { mapAppDb } from "..";
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { UserData } from "../../gql/usersGql";

dayjs.extend(customParseFormat);
dayjs.extend(isBetween);

type IDbUser = UserData & {
    defaultAvatar?: string;
    isBirthday?: number;
    inVacation?: number;
}

const avatars = [
    'bear.svg',
    'bird.svg',
    'cat.svg',
    'coala.svg',
    'cow.svg',
    'dog.svg',
    'dragon.svg',
    'fox.svg',
    'frog.svg',
    'hamster.svg',
    'leo.svg',
    'monkey.svg',
    'mouse.svg',
    'owl.svg',
    'panda.svg',
    'penguin.svg',
    'rabbit.svg',
    'tiger.svg',
    'unicorn.svg',
    'whale.svg',
];

const loadToDBStaff = async (staff: UserData[]) => {
    await mapAppDb.open();
    await mapAppDb.table('staff').clear();

    let currentAvatar = 0;

    const dbStaff = staff.map((user) => {
        const dateMatch = user?.birthday?.replace(/\.$/, '').match(/(\w+)\s(\D+)/);
        const vacationDates = user?.vacationDates?.match(/(.+)\s-\s(.+)$/);

        let isBirthday = 0;
        let inVacation = 0;

        if (dateMatch) {
            const month = shortMounthsMm[dateMatch[2]];
            const bDay = dayjs().date(Number(dateMatch[1])).month(month);
            isBirthday = dayjs().isSame(bDay, 'day') ? 1 : 0;
        }

        if (vacationDates) {
            const firstVacationDay = dayjs(vacationDates[1], 'DD.MM.YYYY');
            const lastVacationDay = dayjs(vacationDates[2], 'DD.MM.YYYY');
            const isSimpleVacation = lastVacationDay.diff(firstVacationDay, 'day') < 31;

            inVacation = isSimpleVacation && dayjs().isBetween(firstVacationDay, lastVacationDay) ? 1: 0;
        }

        const dbUser: IDbUser = {
            ...user,
            isBirthday,
            inVacation,
        };

        currentAvatar++;
        if (currentAvatar > avatars.length - 1) {
            currentAvatar = 0;
        }

        return dbUser;
    });

    await mapAppDb.table('staff').bulkAdd(dbStaff);
};

export {
    loadToDBStaff,
    avatars as userDefaultAvatars, 
}

export type {
    IDbUser,
}