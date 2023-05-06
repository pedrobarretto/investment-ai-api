import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import express from 'express';

import { router } from './services/routes';

const app = express();

dotenv.config();

app.use(bodyParser.json());

app.use(router);

console.log('process.env.OPENAI_API_URL: ', process.env.OPENAI_API_URL);

app.listen(8080, () => {
  console.log(`Server runing on port ${8080}`);
  console.log(`Use the endpoint http://localhost:8080`);
});
