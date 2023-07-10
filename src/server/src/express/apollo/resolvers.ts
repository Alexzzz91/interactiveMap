import fs from 'fs';
import path from 'path';
import { CallbackError } from 'mongoose';
// @ts-ignore
// import { GraphQLUpload } from 'graphql-upload';
import { User } from '../data/user';
import { Department } from '../data/department';
import { Level } from '../data/level';
import { Place } from '../data/place';
import { Address} from '../data/address';

import { Event } from '../data/event';
// import { Void } from './scalarVoid';
// import { placeColors, placesType } from '../../../../common/commonValues';
import storeUpload from './storeUpload';
import { PubSub } from 'graphql-subscriptions';
import { City } from '../data/city';

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
    Floor: {
        // @ts-ignore
        city(parent) {
            try {
                if (parent.city) {
                    // @ts-ignore
                    return City.findById(parent.city, (err: CallbackError, city) => {

                        if (!err) {
                            return city;
                        }

                        throw err;
                    });
                }
                return null;
            } catch (error) {
                
            }
        },
        // @ts-ignore
        address(parent) {
            try {
                if (parent.address) {
                    // @ts-ignore
                    return Address.findById(parent.address, (err: CallbackError, address) => {

                        if (!err) {
                            return address;
                        }

                        throw err;
                    });
                }

                return null;
            } catch (error) {
                    
            }
        },
    },
    Address: {
        // @ts-ignore
        city(parent) {
            console.log('parent', parent);
            if (parent.city) {
                // @ts-ignore
                return City.findById(parent.city, (err: CallbackError, city) => {

                    if (!err) {
                        return city;
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
        moreFloors: async (_parent, {cursor, limit, city, address}: {cursor: string, limit: number, city?: string, address?: string}) => {
            try {
                const params: {city?: string, address?: string} = {};

                if (city) {
                    params.city = city;
                }
                
                if (address) {
                    params.address = address;
                }

                const res = await Level
                    .find(params)                 // Whatever filter you want
                    .limit(limit)             // Use limit and other Query options as you normally would
                    .sort('fl')               // Use sort as you would normally do
                    // @ts-ignore
                    .paginate(cursor)         // startCursor optional
                    .exec();                  // Required

                console.log('res', res);
                return res;
            } catch (error) {
                console.log('error', error);
                return [];
            }
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
        floorByIndex: async (_parent, { index, city, address }: { index: string, city?: string, address?: string}) => {
            const params: { fl:number; city?: string, address?: string } = { fl: Number(index || 0) };

            if (city) {
                params.city = city;
            }
            
            if (address) {
                params.address = address;
            }

            try {
                const params: {city?: string, address?: string} = {};

                if (city) {
                    params.city = city;
                }
                
                if (address) {
                    params.address = address;
                }

                const res = await Level.findOne(params);

                console.log('res', res);
                return res;
            } catch (error) {
                console.log('error', error);
                return error;
            }
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
        // @ts-ignore
        uploads: (parent, args) => {},
        // @ts-ignore
        tablesHashes: (_parent, args) => {},

        address: async () => {
            try {
                const result =  await Address.find({});

                console.log(result);

                return result;
            } catch (error) {
                
            }
        },

        addresses: async () => {
            try {
                const result =  await Address.find({});

                console.log(result);

                return result;
            } catch (error) {
                
            }
        },
        
        // @ts-ignore
        getAddressesByCity: async (_parent, args) => {
            try {
                if (!args.city) {
                    return [];
                }

                const cityModel = await City.findById(args.city);

                let city = null;
    
                if (cityModel) {
                    city = cityModel._id;
                }
                
                console.log('city', city);

                return await Address.find({ city });
            } catch (error) {
                
            }
        },

        city: async () => {
            console.log('city');

            try {
                const result =  await City.find({});

                console.log(result);

                return result;
            } catch (error) {
                
            }
        },

        cities: async () => {
            try {
                const result =  await City.find({});

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
        updateLevelSchema: async (_root, { index, levelSchema, city, address, ...rest }) => {
            try {
                fs.writeFileSync(
                    path.resolve(__dirname, `../../../../../../../assets/img/levels/level${index}.svg`),
                    levelSchema,
                );
            } catch (error) {
                throw error;
            }

            console.log('city', city);
            console.log('address', address);

            const levelModel = await Level.find({fl: index});
            const cityModel = await City.findById(city);

            let cityID = null;

            if (cityModel) {
                cityID = cityModel._id;
            }
            
            const addressModel = await Address.findById(address);

            let addressID = null;

            if (addressModel) {
                addressID = addressModel._id;
            }

            console.log('cityID', cityID);
            console.log('addressID', addressID);

            if (levelModel.length) {
                // @ts-ignore
                return Level.findOneAndUpdate({fl: index}, { levelSchema, city: cityID, address: addressID, ...rest }, (err: CallbackError, floor) => {
                    if (!err) {
                        return floor;
                    }

                    throw err;
                });
            } else {
                try {
                    // @ts-ignore
                    const floor = await Level.create({fl: index, levelSchema, city: cityID, address: addressID, ...rest});
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

        // @ts-ignore
        createCity: async (_parent, args) => {
            try {
                const res = await City.create(args);
                return res;
            } catch (error) {
                throw error;
            }
        },

        // @ts-ignore
        createAddress: async (_parent, { city, ...rest }) => {
            const cityModel = await City.findById(city);

            city = null;

            if (cityModel) {
                city = cityModel._id;
            } else {
                throw 'Такого города нет в БД';
            }

            try {
                const res = await Address.create({...rest, city})
                return res;
            } catch (error) {
                throw error;
            }
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