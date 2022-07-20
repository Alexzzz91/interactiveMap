import mongoose,  { Schema, Document } from 'mongoose';
// @ts-ignore
import paginationPlugin from '@mother/mongoose-cursor-pagination';
import { IDepartment } from './department';

interface IUser extends Document {
    username: string;
    name: string;
    email: string;
    phone: string;
    position: string;
    avatar: string;
    isRemote: boolean;
    isChief: Boolean;
    department: IDepartment;
    mapid: string;
    vacationDates?: string;
    vacationLeft?: number;
    floor: number;
    userByName(userNane: string): IUser;
};

const userSchema: Schema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    position: {
        type: String,
    },
    chief: {
        type: String,
    },
    division1: {
        type: String,
    },
    division2: {
        type: String,
    },
    name: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: false,
    },
    phone: {
        type: String,
        required: false,
    },
    birthday: {
        type: String,
        required: false,
    },
    entryDate: {
        type: String,
        required: false,
    },
    vacationDates: {
        type: String,
        required: false,
    },
    vacationLeft: {
        type: Number,
        required: false,
    },
    avatar: {
        type: String,
    },
    isRemote: {
        type: Boolean,
    },
    isChief: {
        type: Boolean,
    },
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department'
    },
    mapid: {
        type: String,
        required: false,
    },
    workplaceid: {
        type: String,
        required: false,
    },
    floor: {
        type: Number,
        required: false,
    },
    fcmToken: {
        type: String,
        required: false,
    },
});

userSchema.statics.userByName = async function(login: string) {
  let user = await this.findOne({
    username: login,
  });

  if (!user) {
    user = await this.findOne({ email: login });
  }

  return user;
};

userSchema.plugin(paginationPlugin);

const User = mongoose.model<IUser>('User', userSchema);

export { User };
export type { IUser };
