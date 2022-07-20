import mongoose,  { Schema, Document } from 'mongoose';
import { ILevel } from './level';

interface IPoster extends Document {
  name: string;
  image: string;
  posterid: number;
  textDescription: string;
  level: ILevel;
};

const posterSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  textDescription: {
    type: String,
  },
  posterid: {
    type: Number,
    required: true,
  },
  level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
});

const Poster = mongoose.model<IPoster>('Poster', posterSchema);

export { Poster };
export type { IPoster };
