import { Router } from 'express';

import { investmentRouter } from './InvestmentService/investment.routes';

const router = Router();

router.use('/investment', investmentRouter);

export { router };
