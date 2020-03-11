import express from 'express';
import dotenv from 'dotenv';
import createTable from './helpers/tables';

dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({
    status: '200',
    message: 'Server is running',
  });
});

app.listen(port, () => {
  createTable();

  // eslint-disable-next-line no-console
  console.log(`Server is running on http://localhost:${port}`);
});

export default app;
