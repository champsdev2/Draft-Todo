import dotenv from 'dotenv';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });

const envir = {
  testlocal: {
    connection: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/testodo`,
  },

  test: {
    connection: 'postgres://localhost/testodo',
  },

  development: {
    connection: `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@localhost/tododb`,
  },

  production: {
    connectionString: process.env.DATABASE_URL,
  },
};

export default envir;
