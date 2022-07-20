import mongoose,  { Schema, Document } from 'mongoose';
// @ts-ignore
import paginationPlugin from '@mother/mongoose-cursor-pagination';
import { ILevel } from './level';

interface IPlace extends Document {
  name: string;
  image: string;
  location: string;
  mapid: number;
  textDescription: string;
  type: string;
  showCapacity: boolean;
  capacity: number;
  hasTv: boolean;
  hasWindowsPc: boolean;
  hasTable: boolean;
  hasAppleTv: boolean;
  hasBoard: boolean;
  hasCoffeeMachine: boolean;
  hasMicrowave: boolean;
  hasFridge: boolean;
  hasSink: boolean;
  hasArmchair: boolean;
  hasChair: boolean;
  hasCooler: boolean;
  level: ILevel;
};

const placeSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  location: {
    type: String,
  },
  mapid: {
    type: Number,
    required: true,
  },
  textDescription: {
    type: String,
  },
  type: {
    type: String,
  },
  showCapacity: {
    type: Boolean,
  },
  capacity: {
    type: Number,
  },
  hasTv: {
    type: Boolean,
  },
  hasWindowsPc: {
    type: Boolean,
  },
  hasTable: {
    type: Boolean,
  },
  hasAppleTv: {
    type: Boolean,
  },
  hasBoard: {
    type: Boolean,
  },
  hasCoffeeMachine: {
    type: Boolean,
  },
  hasMicrowave: {
    type: Boolean,
  },
  hasFridge: {
    type: Boolean,
  },
  hasSink: {
    type: Boolean,
  },
  hasArmchair: {
    type: Boolean,
  },
  hasChair: {
    type: Boolean,
  },
  hasCooler: {
    type: Boolean,
  },
  level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
});

placeSchema.plugin(paginationPlugin);

const Place = mongoose.model<IPlace>('Place', placeSchema);

export { Place };
export type { IPlace };
