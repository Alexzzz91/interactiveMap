import mongoose, { Schema, Document } from 'mongoose';

interface ICity extends Document {
  name: string;
  description: string;
};

const citySchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  textDescription: {
    type: String,
    required: false,
    description: 'описание города',
  },
});

const City = mongoose.model<ICity>('City', citySchema);

export { City };
export type { ICity };
