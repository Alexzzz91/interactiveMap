import mongoose, { Schema, Document } from 'mongoose';
import { ICity } from './city';

interface IAddress extends Document {
  name: string;
  description: string;
  city: ICity
};

const addressSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  textDescription: {
    type: String,
    required: false,
    description: 'описание Адреса',
  },
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City' },
});

const Address = mongoose.model<IAddress>('Address', addressSchema);

export { Address };
export type { IAddress };
