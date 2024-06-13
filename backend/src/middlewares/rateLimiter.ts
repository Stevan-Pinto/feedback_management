import { Request, Response, NextFunction } from 'express';

const ipRequestCount: { [key: string]: number } = {};
const requestTimestamps: { [key: string]: number } = {};

const rateLimiter = (req: Request, res: Response, next: NextFunction) => {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!ipRequestCount[ip]) {
    ipRequestCount[ip] = 1;
    requestTimestamps[ip] = currentTime;
  } else {
    const timeDiff = currentTime - requestTimestamps[ip];
    if (timeDiff < 10000) {
      if (ipRequestCount[ip] >= 1) {
        return res.status(429).send('Too many requests. Please try again later.');
      }
      ipRequestCount[ip]++;
    } else {
      ipRequestCount[ip] = 1;
      requestTimestamps[ip] = currentTime;
    }
  }
  next();
};

export default rateLimiter;

