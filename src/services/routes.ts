import { Router } from 'express';

import { lowRiskTipsRouter } from './LowRiskTipsServices/lowRiskTips.routes';

const router = Router();

router.use('/low-risk', lowRiskTipsRouter);

export { router };
