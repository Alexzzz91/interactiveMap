import mongoose,  { Schema, Document } from 'mongoose';
// @ts-ignore
import paginationPlugin from '@mother/mongoose-cursor-pagination';
import { ILevel } from './level';

interface IDepartment extends Document {
  name: string;
  mapid?: number;
  division?: string;
  level?: ILevel;
};

const departmentSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mapid: {
    type: Number,
    required: false,
  },
  division: {
    type: String,
  },
  level: { type: mongoose.Schema.Types.ObjectId, ref: 'Level' },
});

departmentSchema.plugin(paginationPlugin);

const Department = mongoose.model<IDepartment>('Department', departmentSchema);

export { Department };
export type { IDepartment };