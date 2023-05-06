import { Router, Response, Request } from 'express';

import { createPrompt } from '../../apps';
// import { OpenAIMiddleware } from '../../middlewares';
import { httpService } from '../HttpService/HttpService';

const lowRiskTipsRouter = Router();

lowRiskTipsRouter.post('', async (req: Request, res: Response) => {
  const { riskLevel, value, timeSpent } = req.body;

  const prompt = createPrompt.createLowRiskPrompt({
    riskLevel,
    value,
    timeSpent,
  });

  const response = await httpService.post(prompt);

  return res.status(200).json({ ...response });
});

export { lowRiskTipsRouter };
