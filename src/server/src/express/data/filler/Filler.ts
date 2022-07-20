import * as parser from 'fast-xml-parser';
import fs from 'fs';
import path from 'path';
import { models } from '../mongo';
import { IDepartment } from '../department';
import {
    places,
} from "./places";

// type IUser = {
//     user_name: string;
//     birthday: string;
//     job_title: string;
//     division1: string;
//     division2: string;
//     division3: string | null;
//     chief: string;
//     entry_date: string;
//     vacation_left: number;
//     vacation_dates?: string;
// };

type IPlace = {
    name: string,
    type: string,
    fl: number,
    pl: number,
    capacity: number,
    hasTv: boolean,
    hasWindowsPc: boolean,
    hasTable: boolean,
    hasAppleTv: boolean,
    hasBorad: boolean,
    hasCoffeeMachine: boolean,
    hasMicrowave: boolean,
    hasFridge: boolean,
};


class Filler {
    private countOfLevels = 2;
    // private readonly confluenceBaseUrl: string;
    private chiefList: string[] =  [];

    private xmlData = fs.readFileSync(
        path.resolve(__dirname, '../../../../../../../../public/data/uploads/stuff.xml'),
        {
            encoding: 'utf8',
            flag:'r'
        }
    );
    private confluenceData = fs.readFileSync(
        path.resolve(__dirname, '../../../../../../../../assets/data/confluenceData.json'),
        {
            encoding: 'utf8',
            flag:'r'
        }
    );

    constructor() {
    }

    clearData = async () => {
        console.log('clearData');

        const users = parser.parse(this.xmlData).identities.identity;
        const currentUsers = await models.User.find({});

        const dismissedUsers = currentUsers.reduce((acc, user) => {
            const isDismiss = !users.some(
                (item: any) => item.user_name.toLowerCase() === user.username.toLowerCase(),
            );

            if (isDismiss) {
                acc.push(user.username);
            }

            return acc;
        }, [] as string[]);

        await models.User.deleteMany(
            {
                "username": {
                    $in: dismissedUsers
                }
            }
        );
    };

    addUsersAndDepartments = async () => {
        console.log('addUsersAndDepartments');
        const departmentsIds: {[key: string]: string} = {};
        const users = parser.parse(this.xmlData).identities.identity;


        const confluenceUsers = JSON.parse(this.confluenceData);

        for (const user of users) {
            if (user.chief && !this.chiefList.includes(user.chief.toLowerCase())) {
                this.chiefList.push(user.chief.toLowerCase());
            } 

            const username = user.user_name.toLowerCase();
            const searchResult = await models.User.findOne({"username": username});

            const confluenceUser = confluenceUsers.find((item: any) => {
                return item.username.toLowerCase() === user.user_name.toLowerCase();
            })
            const currentDepartment = user.division2 || user.division1;

            let departmentModel: IDepartment;

            const departmentResult = await models.Department.findOne({currentDepartment});

            if (!departmentsIds[currentDepartment]) {
                if (!departmentResult) {
                    departmentModel = new models.Department({
                        name: currentDepartment,
                        division: user.division1,
                    });
                } else {
                    departmentModel = departmentResult;
                }

                departmentsIds[currentDepartment] = departmentModel.id;

                if (!departmentResult) {
                    await departmentModel.save();
                }
            }

            if (!searchResult) {
                const userModel = new models.User({
                    username: user.user_name.toLowerCase(),
                    name: !!confluenceUser ? confluenceUser.displayName : '',
                    email: user.user_email,
                    position: user.job_title,
                    avatar: 'avatarSrc',
                    chief: user.chief,
                    birthday: user.birthday,
                    entryDate: user.entry_date,
                    division1: user.division1,
                    division2: user.division2,
                    vacationDates: user.vacation_dates,
                    vacationLeft: user.vacation_left,
                    department: departmentsIds[currentDepartment],
                });

                await userModel.save();
            } else if (departmentResult) {
                await searchResult.update({
                    name: !!confluenceUser ? confluenceUser.displayName : '',
                    position: user.job_title,
                    avatar: 'avatarSrc',
                    chief: user.chief,
                    birthday: user.birthday,
                    entryDate: user.entry_date,
                    division1: user.division1,
                    division2: user.division2,
                    vacationDates: user.vacation_dates,
                    vacationLeft: user.vacation_left,
                    department: departmentResult.id, 
                });
            }
        };
    };

    addChiefs = () => {
        console.log('addChiefs');
        this.chiefList.forEach(async (user) => {
            await models.User.findOneAndUpdate({username: user}, { isChief: true });
        });
    };

    addPlaces = () => {
        console.log('addPlaces');
        places.forEach(async (place: IPlace) => {
            const pl = new models.Place({
                name: place.name,
                type: place.type,
                mapid: place.pl,
                capacity: place.capacity,
                hasTv: place.hasTv,
                hasWindowsPc: place.hasWindowsPc,
                hasTable: place.hasTable,
                hasAppleTv: place.hasAppleTv,
                hasBorad: place.hasBorad,
                hasCoffeeMachine: place.hasCoffeeMachine,
                hasMicrowave: place.hasMicrowave,
                hasFridge: place.hasFridge,
            });

            const level = await models.Level.find({"fl": place.fl});

            if (level) {
                pl.level = level[0]._id;
            }

            await pl.save();
        });
    };

    addLevels = async () => {
        console.log('addLevels');
        const countOfLevels = this.countOfLevels;

        for (let i = 1; i <= countOfLevels; i++) {
            const floor = fs.readFileSync(
                path.resolve(__dirname, `../../../../../../../../assets/img/levels/level${i}.svg`),
                'utf8'
            );

            const floorModel = new models.Level({
                name: `${i} этаж`,
                fl: i,
                levelSchema: floor,
            });

            await floorModel.save();
        }
    };

    inspectIsFillAll = async () => {
        console.log('inspectIsFillAll');
        const userResult = await models.User.findOne();
        const levelResult = await models.Level.findOne();
        const departmentResult = await models.Department.findOne();
        const placeResult = await models.Place.findOne();

        return (!userResult && !levelResult && !departmentResult && !placeResult);
    };

    fillDB = async () => {
        console.log('fillDB');

        const isFillAll = await this.inspectIsFillAll();
        const promises = [];

        if (isFillAll) {
            promises.push(models.User.deleteMany({}));

            promises.push(models.Department.deleteMany({}));
            
            promises.push(models.Level.deleteMany({}));
            
            promises.push(models.Place.deleteMany({}));
        }

        await Promise.all(promises);
        
        if (isFillAll) {
            await this.addLevels();
            this.addPlaces();
        }
        
        await this.clearData();

        await this.addUsersAndDepartments();
        this.addChiefs();
        return;
    };
}

export { Filler }