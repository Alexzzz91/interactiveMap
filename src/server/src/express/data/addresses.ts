import mongoose, { Schema, Document } from 'mongoose';

interface IAddresses extends Document {
  name: string;
  description: string;
};

const addressSchema: Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  textDescription: {
    type: String,
    required: false,
    description: 'описание места',
  },
});

const Addresses = mongoose.model<IAddresses>('Addresses', addressSchema);

export { Addresses };
export type { IAddresses };
