import { Pool } from 'pg';
import dotenv from 'dotenv';
import envir from './urls';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const environment = process.env.NODE_ENV || 'development';
const environmentsConfig = envir[environment];


const isProduction = process.env.NODE_ENV === 'production';


const connection = new Pool({
  connectionString: environmentsConfig.connection,
  ssl: isProduction,
});

// eslint-disable-next-line import/prefer-default-export
export const query = (text, params) => connection.query(text, params);
