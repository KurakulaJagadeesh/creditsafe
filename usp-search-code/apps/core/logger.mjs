import { Logger } from '@aws-lambda-powertools/logger';

const createLogger = (serviceName) => new Logger(
	{
		serviceName,
		level: process.env.LOG_LEVEL || 'INFO',
	},
);

export default createLogger;
