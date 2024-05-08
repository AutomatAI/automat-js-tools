/**
 * Module to share configuration and tooling across all JS projects
 * TODO: Add ESLint config
 */
import winston from 'winston';

const node_env = process.env.NODE_ENV ?? "";
const format = node_env.toLowerCase().includes("prod") ? winston.format.json() : winston.format.simple();
export const logger = winston.createLogger({
    level: 'info',
    format,
    transports: [
      new winston.transports.Console()
    ]
});
