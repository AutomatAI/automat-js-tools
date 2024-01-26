/**
 * Module to share configuration and tooling across all JS projects
 * Written using vanilla JS to ensure it runs in every project without build configuration
 * TODO: Add ESLint config
 */

const winston = require('winston');


const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.Console()
    ]
});

module.exports = { logger };
