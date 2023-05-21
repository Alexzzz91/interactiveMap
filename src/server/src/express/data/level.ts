import mongoose, { Schema, Document } from 'mongoose';
// @ts-ignore
import paginationPlugin from '@mother/mongoose-cursor-pagination';

interface ILevel extends Document {
  name: string;
  fl: number;
  levelSchema: string;
  paginate(cursor:string): Promise<void>;
};

const levelSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fl: {
    type: Number,
    required: true,
    description: 'ключ для урла',
  },
  levelSchema: {
    type: String,
    required: true,
  },
  city: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'City'
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Address'
  },
});

levelSchema.plugin(paginationPlugin);

const Level = mongoose.model<ILevel>('Level', levelSchema);

export { Level };
export type { ILevel };
