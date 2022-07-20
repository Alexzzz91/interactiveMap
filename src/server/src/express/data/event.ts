import mongoose,  { Schema, Document } from 'mongoose';
import { IUser } from './user';

interface IEvent extends Document {
  name: string;
  location: string;
  workplaceid: number;
  mapid: number;
  description: string;
  user: [IUser];
  author: string;
  lastActiveAt: string;
  eventType: string;
  isActual: boolean;
  floorIndex: string;
};

const eventSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  mapid: {
    type: Number,
    required: false,
  },
  workplaceid: {
    type: String,
    required: false,
  },
  description: {
    type: String,
  },
  users: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  },
  author: {
    type: String,
    required: true,
  },
  lastActiveAt: String,
  eventType: String,
  isActual: Boolean,
  floorIndex: String,
});

const Event = mongoose.model<IEvent>('Event', eventSchema);

export { 
  Event
};

export type { IEvent };
