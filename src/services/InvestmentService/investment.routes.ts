import { Router, Response, Request } from 'express';

import { createPrompt } from '../../apps';
// import { OpenAIMiddleware } from '../../middlewares';
import { httpService } from '../HttpService/HttpService';

const investmentRouter = Router();

investmentRouter.post('/normal', async (req: Request, res: Response) => {
  const { riskLevel, value, timeSpent } = req.body;

  const prompt = createPrompt.mountPrompt({
    riskLevel,
    value,
    timeSpent,
  });

  const { choices } = await httpService.post(prompt);

  return res.status(200).json({ text: choices[0].text });
});

investmentRouter.post('/crypto', async (req: Request, res: Response) => {
  const { value } = req.body;

  const prompt = createPrompt.mountPromptCrypto(value);

  const { choices } = await httpService.post(prompt);

  return res.status(200).json({ text: choices[0].text });
});

export { investmentRouter };
