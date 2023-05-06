import { Response, Request, NextFunction } from 'express';

export function OpenAIMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  req.headers = {
    authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    'Content-Type': 'application/json',
  };

  return next();
}
