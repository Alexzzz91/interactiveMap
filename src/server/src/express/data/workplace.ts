import mongoose,  { Schema, Document } from 'mongoose';
import { ILevel } from './level';
import { IUser } from './user';

interface IWorkplace extends Document {
  location: string;
  mapid: number;
  user: IUser;
  level: ILevel;
};

const workplaceSchema: Schema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  mapid: {
    type: Number,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
});

const Workplace = mongoose.model<IWorkplace>('Workplace', workplaceSchema);

export { Workplace };
export type { IWorkplace };
