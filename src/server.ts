import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { router } from './services/routes';

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

dotenv.config();

app.use(bodyParser.json());

app.use(router);

app.listen(8080, () => {
  console.log(`Server runing on port ${8080}`);
});
