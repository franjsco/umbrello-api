import mongoose from 'mongoose';

import citySchema from './city.model';
import logger from '../logger';
import config from '../config';


const options = {
  useNewUrlParser: true,
  user: config.database.user,
  pass: config.database.password,
};

mongoose.connect(config.database.host, options);

mongoose.set('useFindAndModify', false);

const db = mongoose.connection;


db.on('error', (err) => logger.error(err));

db.once('open', () => logger.info('Database connected'));


export default citySchema;
