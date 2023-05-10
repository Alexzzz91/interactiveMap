import mongoose from 'mongoose';
import { mongoUrl } from '../../../../common/config/env';
import { User } from './user';
import { Workplace } from './workplace';
import { Department } from './department';
import { Level } from './level';
import { Place } from './place';
import { Poster } from './poster';
import { Event } from './event';
import { City } from './city';
import { Address } from './address';

const connectDb = () =>
  mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    dbName: 'interactivemap',
    user: 'root',
    pass: 'example',
    // dbName: 'interactivemap',
    // user: 'officemapuser',
    // pass: 'officemaphardpassword',
  });

const models = {
  User,
  Workplace,
  Department,
  Level,
  Place,
  Poster,
  Event,
  City,
  Address,
};

mongoose.connection.once('open', () => {
  console.log('connected to database');
});

export { connectDb, models, models as default };
