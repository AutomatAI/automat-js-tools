import winston from 'winston';

import { Config } from './config';


export const createLogger = (params: winston.LoggerOptions) => {
  const node_env = Config.NODE_ENV;
  const defaultFormat = node_env.toLowerCase().includes("prod") ? winston.format.json() : winston.format.simple();
  const defaultParams = {
    level: 'info',
    format: defaultFormat,
    transports: [
      new winston.transports.Console()
    ]
  }

  const mergedParams = {
    ...defaultParams,
    ...params
  }
  return winston.createLogger(mergedParams);
}

export const logger = createLogger({});
