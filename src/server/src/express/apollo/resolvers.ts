import fs from 'fs';
import path from 'path';
import { CallbackError } from 'mongoose';
import xpath from 'xpath';
import { DOMParser } from 'xmldom';
// @ts-ignore
// import { GraphQLUpload } from 'graphql-upload';
import { IUser, User } from '../data/user';
import { Department, IDepartment } from '../data/department';
import { ILevel, Level } from '../data/level';
import { IPlace, Place } from '../data/place';
import { IPoster, Poster } from '../data/poster';
import { Addresses } from '../data/addresses';

import { Event } from '../data/event';
// import { Void } from './scalarVoid';
import { placeColors, placesType } from '../../../../common/commonValues';
import storeUpload from './storeUpload';
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();
const EVENT_CREATED = 'EVENT_CREATED';

const resolvers = {
    User: {
        // @ts-ignore
        department(parent) {
            return Department.findById(
                parent.department,
                // @ts-ignore
                ({}, (err: CallbackError, departments) => {
                        if (!err) {
                           
                            return departments;
                        }
                        throw err;
                    }
                )
            );
        }
    },
    Department: {
        // @ts-ignore
        level(parent) {
            if (parent.level) {
                // @ts-ignore
                return Level.findById(parent.level, (err: CallbackError, floor) => {
                    if (!err) {
                        return floor;
                    }
                    throw err;
                });
            }

            return null;
        },
        // @ts-ignore
        staff(parent) {
            return User.find({ department: parent._id }, (err: CallbackError, users) => {
                if (!err) {
                    return users;
                }
                throw err;
            });
        },
    },
    Place: {
        // @ts-ignore
        level(parent) {
            if (parent.level) {
                // @ts-ignore
                return Level.findById(parent.level, (err: CallbackError, floor) => {

                    if (!err) {
                        return floor;
                    }

                    throw err;
                });
            }

            return null;
        },
    },
    Query: {
        users: () => User.find({}, (err: CallbackError, usersRes) => {
            if (!err) {
                return usersRes;
            }
            throw err;
        }),
        // @ts-ignore
        moreUsers: async (_parent, {cursor, limit}: {cursor: string, limit: number}) => {
            const res = await User
                .find({})
                .limit(limit)
                .sort('username')
                // @ts-ignore
                .paginate(cursor)
                .exec();

            return res
        },
        // @ts-ignore
        user: (_parent, args: {id: string}) => {
            // @ts-ignore
            return User.findById(args.id, (err: CallbackError, user) => {
                if (!err) {
                    return user;
                }
                throw err;
            });
        },
        // @ts-ignore
        userByName: (_parent, args) => {
            // @ts-ignore
            return User.userByName(args.username, (err: CallbackError, user) => {
                
                if (!err) {
                    return user;
                }
                throw err;
            });
        },
        departments: () => Department.find({}, (err: CallbackError, departments) => {
            if (!err) {
                return departments;
            }
            throw err;
        }),
        // @ts-ignore
        moreDepartments: async (_parent, {cursor, limit}: {cursor: string, limit: number}) => {
            const res = await Department
                .find({})                 // Whatever filter you want
                .limit(limit)             // Use limit and other Query options as you normally would
                .sort('name')
                // @ts-ignore
                .paginate(cursor)         // startCursor optional
                .exec();                  // Required

            return res
        },
        // @ts-ignore
        department: (_parent, args) => {
            // @ts-ignore
            return Department.findById(args.id, (err: CallbackError, department) => {
                if (!err) {
                    return department;
                }
                throw err;
            });
        },
        floors: () => Level.find({}, (err: CallbackError, floor) => {
            if (!err) {
                return floor;
            }
            throw err;
        }),     
        // @ts-ignore
        moreFloors: async (_parent, {cursor, limit}: {cursor: string, limit: number}) => {
            const res = await Level
                .find({})                 // Whatever filter you want
                .limit(limit)             // Use limit and other Query options as you normally would
                .sort('fl')               // Use sort as you would normally do
                // @ts-ignore
                .paginate(cursor)         // startCursor optional
                .exec();                  // Required

            return res
        },
        // @ts-ignore
        floor: (_parent, args) => {
            // @ts-ignore
            return Level.findById(args.id, (err: CallbackError, floor) => {
                if (!err) {
                    return floor;
                }
                throw err;
            });
        },
        // @ts-ignore
        floorByIndex: (_parent, args) => {
            // @ts-ignore
            return Level.findOne({fl: Number(args.index)}, (err: CallbackError, floor) => {
                if (!err) {
                    return floor;
                }
                throw err;
            });
        },
        places: () => Place.find({}, (err: CallbackError, placesRes) => {
            if (!err) {
                return placesRes;
            }
            throw err;
        }),
        // @ts-ignore
        place: (_parent, args) => {
            // @ts-ignore
            return Place.findById(args.id, (err: CallbackError, place) => {
                if (!err) {
                    return place;
                }
                throw err;
            });
        },
        posters: () => Poster.find({}, (err: CallbackError, postersRes: IPoster[]) => {
            if (!err) {
                return postersRes;
            }
            throw err;
        }),
        // @ts-ignore
        poster: (_parent, args) => {
            // @ts-ignore
            return Poster.find({ posterid: args.posterid, level: args.levelId}, (err: CallbackError, poster) => {
                if (!err) {
                    return poster;
                }
                throw err;
            });
        },
        // @ts-ignore
        uploads: (parent, args) => {},
        // @ts-ignore
        tablesHashes: (_parent, args) => {},

        addresses: async () => {
            console.log('address');

            try {
                const result =  await Addresses.find({});

                console.log(result);

                return result;
            } catch (error) {
                
            }
        },

        events: async () => {
            const today = new Date();
            const yesterday = new Date();

            yesterday.setDate(today.getDate() - 1);

            const findParams = {
                lastActiveAt:{
                    $gte:`${yesterday.getTime()}`, 
                    $lt:`${today.getTime()}`
                },
                isActual: true,
            };

            console.log('findParams', findParams);
            try {
                return await Event.find(findParams).sort({ lastActiveAt: -1 });
            } catch (error) {
                
            }
        },
    },
    Mutation: {
        // @ts-ignore
        createUser: (_root, args) => {
            const user = new User(args);

            return user.save().then((res) => {
                if (res) {
                    return res;
                }
                throw 'не создали user';
            });
        },
        // @ts-ignore
        updateUser: (_root, {id, ...rest}) => {
            return User.findByIdAndUpdate(
                id, rest, {}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        createFCMToken: async (_parent, {id, token}: {id: string, token: string}) => {
            const res = await User.findByIdAndUpdate(id, {fcmToken: token});
            return res;
        },
        // @ts-ignore
        departmentSetMapId: (_root, {id, mapid}) => {
            return Department.findByIdAndUpdate(
                id, { mapid }, {}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        updateDepartment: async (_root, {id, floorIndex, ...rest}) => {
            const levelModel = await Level.find({"fl": Number(floorIndex)});
            let level = null;

            if (levelModel.length) {
                level = levelModel[0]._id;
            }
            
            return Department.findByIdAndUpdate(
                id, {...rest, level}, {}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        placeSetType: async (_root, {place, type, level, itemId}) => {
            let floor = fs.readFileSync(
                path.resolve(__dirname, `../../../../../../../assets/img/levels/level${level}.svg`),
                'utf8'
            );
            
            const doc = new DOMParser().parseFromString(floor);

            const mapid = place.match(/place(\d+$)/)[1];

            const targetPlace = xpath.select(
                `//*[@id="Regions"]/*[@id = '${place}']`,
                doc
            );
            
            let entitie;
            let placeColor;

            const levelModel = await Level.findOne({fl: Number(level)}, (err: CallbackError, level: ILevel) => {
                if (err) {
                    return console.log(err);
                }

                return level;
            });

            switch (type) {
                case 'user':
                    // @ts-ignore
                    entitie = await User.findById<IUser>(itemId, {mapid, floor: level}, (err: CallbackError, user: IUser) => {
                        if (err) {
                            return console.log(err);
                        }

                        return user;
                    });

                    placeColor = placeColors.workPlace;
                    
                    break;
                case 'department':
                    // @ts-ignore
                    entitie = await Department.findByIdAndUpdate<IDepartment>(itemId, {mapid, level: levelModel}, (err: CallbackError, dep: IDepartment) => {
                        if (err) {
                            return console.log(err);
                        }

                        return dep;
                    });

                    placeColor = placeColors.department;
                    
                    break;
                case 'place':
                    // @ts-ignore

                    entitie = await Place.findByIdAndUpdate<IPlace>(itemId, {mapid, level: levelModel}, (err: CallbackError, place: IPlace) => {
                        if (err) {
                            return console.log(err);
                        }

                        return place;
                    });

                    if (entitie) {
                        switch (entitie.type) {
                            case placesType.Wardrobe:
                                placeColor = placeColors.wardrobe;
                                break;

                            case placesType.Atm:
                                placeColor = placeColors.atm;
                                break;

                            case placesType.ChillZone:
                                placeColor = placeColors.chillZone;
                                break;

                            case placesType.EatingFacilities:
                                placeColor = placeColors.eatingFacilities;
                                break;

                            case placesType.Elevator:
                                placeColor = placeColors.elevator;
                                break;

                            case placesType.GameRoom:
                                placeColor = placeColors.gameRoom;
                                break;

                            case placesType.Hallway:
                                placeColor = placeColors.hallway;
                                break;
                            
                            case placesType.Kiosk:
                                placeColor = placeColors.kiosk;
                                break;

                            case placesType.MeetingRoom:
                                placeColor = placeColors.meetingRoom;
                                break;

                            case placesType.Security:
                                placeColor = placeColors.security;
                                break;

                            case placesType.ShowerRoom:
                                placeColor = placeColors.showerRoom;
                                break;

                            case placesType.ServerRoom:
                                placeColor = placeColors.specialRoom;
                                break;
                            
                            case placesType.TalkingBooths:
                                placeColor = placeColors.talkingBooths;
                                break;

                            case placesType.Toilet:
                                placeColor = placeColors.toulet;
                                break;

                            case placesType.TopManager:
                                placeColor = placeColors.topManager;
                                break;
                            default:
                                break;
                        }
                    }
                    
                    break;
            }

            if (targetPlace && targetPlace[0]) {
                // @ts-ignore
                targetPlace[0].setAttribute('fill', placeColor);
            }

            const levelSchema = doc.documentElement.toString();

            fs.writeFileSync(
                path.resolve(__dirname, `../../../../../../../assets/img/levels/level${level}.svg`),
                levelSchema,
            );

            // @ts-ignore
            return Level.findOneAndUpdate({fl: level}, {levelSchema}, (err: CallbackError, floor) => {
                if (!err) {
                    return floor;
                }

                throw err;
            });
        },
        // @ts-ignore
        updateLevelSchema: async (_root, {index, name, levelSchema}) => {
            try {
                fs.writeFileSync(
                    path.resolve(__dirname, `../../../../../../../assets/img/levels/level${index}.svg`),
                    levelSchema,
                );
            } catch (error) {
                throw error;
            }

            const levelModel = await Level.find({fl: index});

            if (levelModel.length) {
                // @ts-ignore
                return Level.findOneAndUpdate({fl: index}, {levelSchema, name}, (err: CallbackError, floor) => {
                    if (!err) {
                        return floor;
                    }

                    throw err;
                });
            } else {
                try {
                    // @ts-ignore
                    const floor = await Level.create({fl: index, levelSchema, name});
                    return floor;
                } catch (error) {
                    throw error;
                }
            }
        },
        // @ts-ignore
        userSetMapId: (_root, {id, ...rest}) => {
            return User.findByIdAndUpdate(
                id, {...rest}, {}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        userSetFloor: (_root, {id, floor}) => {
            return User.findByIdAndUpdate(
                id, {floor}, {}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        placeUploadImage: async (_parent, { file }) => {
            const { filename, mimetype, encoding } = await file;
            // @ts-ignore
            return file.then(async (file) => {
                const res = await storeUpload(file);
                return {
                    filename,
                    mimetype,
                    encoding,
                    url: `/img/uploadImgs/${res}`,
                };
            });
        },
        // @ts-ignore
        updateOrCreatePlace: async (_root, place) => {
            const {id, floorIndex, capacity, ...rest} = place;

            const levelModel = await Level.find({"fl": Number(floorIndex)});

            let level = null;

            if (levelModel.length) {
                level = levelModel[0]._id;
            }

            if (id) {
                return Place.findByIdAndUpdate(
                    id, {...rest, capacity: Number(capacity) || 0, level}, {}, (err: CallbackError, res) => {
                        if (!err) {
                            return res;
                        }
    
                        throw err;
                    }
                );
            }

            try {
                // @ts-ignore
                const place = await Place.create({...rest, capacity: Number(capacity) || 0, level});
                return place;
            } catch (error) {
                throw error;
            }
        },
        // @ts-ignore
        updateOrCreatePoster: async (_root, {id, floorIndex, ...rest}) => {
            const levelModel = await Level.find({"fl": Number(floorIndex)});

            let level = null;

            if (levelModel.length) {
                level = levelModel[0]._id;
            }

            if (id) {
                return Poster.findByIdAndUpdate(
                    id, {...rest, level}, {}, (err: CallbackError, res) => {
                        if (!err) {
                            return res;
                        }
    
                        throw err;
                    }
                );
            }

            // @ts-ignore
            return Poster.create({...rest, level}, (err: CallbackError, res) => {
                    if (!err) {
                        return res;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        deletePlace: async (_root, {id}) => {
            // @ts-ignore
            return Place.findByIdAndDelete(id, (err: CallbackError, res) => {
                if (!err) {
                    return res;
                }

                throw err;
            });
        },
        // @ts-ignore
        removeUserWorkplaceId: async (_root, {id}) => {
            // @ts-ignore
            return User.findByIdAndUpdate(id, {floor: null, workplaceid: null}, {}, (err: CallbackError) => {
                    if (!err) {
                        return;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        removeUserMapId: async (_root, {id}) => {
            // @ts-ignore
            return User.findByIdAndUpdate(id, {floor: null, mapid: null}, {}, (err: CallbackError) => {
                    if (!err) {
                        return;
                    }

                    throw err;
                }
            );
        },
        // @ts-ignore
        createEvent: async (_parent, args) => {
            const res = await Event.create({
                ...args,
                lastActiveAt: Date.now(),
                isActual: true
            });

            pubsub.publish(EVENT_CREATED, { eventCreated: res });

            return res;
        },
    },

    Subscription: {
        eventCreated: {
            subscribe: () => pubsub.asyncIterator([EVENT_CREATED]),
        },
    },

    // Void: Void,
    // Upload: GraphQLUpload,
};

export {
    resolvers
}