import createError from 'http-errors';
import { ERROR_MESSAGE } from '../responseMessages.mjs';

const errorHandler = (e) => {
	global.logger.error('Error occurred', e);
	let errorMessage = e.name;
	let errorDetails = e.message;
	if (e instanceof SyntaxError) {
		const errorObj = JSON.parse(e.message);
		errorMessage = errorObj.errorType ? errorObj.errorType : errorMessage;
		if (errorObj.instancePath && errorObj.message) {
			errorDetails = `${errorObj.instancePath.replace('/', '')} ${errorObj.message}`;
			if (errorObj.params?.allowedValues) errorDetails = `${errorDetails}: ${errorObj.params.allowedValues}`;
		} else if (errorObj.errors) {
			errorDetails = errorObj.errors;
		}
	} else if (e.name.toLowerCase() === 'typeerror') {
		errorMessage = ERROR_MESSAGE.QUERY_ERROR;
		e.message = ERROR_MESSAGE.QUERY_ERROR_DETAILS;
	} else {
		errorMessage = ERROR_MESSAGE.UNKNOWN_ERROR;
	}
	const errorResponseModel = {
		correlationId: '',
		message: errorMessage,
		details: errorDetails,
	};

	global.logger.error('Error occurred', { errorMessage, errorDetails });
	return errorResponseModel;
};

const customErrorHandler = () => ({
	onError: (request) => {
		// Execute the errorHandler with the caught error
		const errorResponse = errorHandler(request.error);

		// Manually update a BadRequest error with the formatted error response
		request.error = new createError.BadRequest(JSON.stringify(errorResponse));
	},
});

export default customErrorHandler;
