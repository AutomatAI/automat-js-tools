/**
 * Module to share configuration and tooling across all JS projects
 * Written using vanilla JS to ensure it runs in every project without build configuration
 * TODO: Add ESLint config
 */

const winston = require('winston');


const format = process.env.NODE_ENV.toLowerCase().includes("prod") ? winston.format.json() : winston.format.cli()
const logger = winston.createLogger({
    level: 'info',
    format: format,
    transports: [
      new winston.transports.Console()
    ]
});

module.exports = { logger };
