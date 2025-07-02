// eslint-disable-next-line import/no-extraneous-dependencies
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client('eu-west-1');

const getCriterias = async () => {
	// Use AWS Env Vars
	const bucket = process.env.SEARCH_CRITERIA_BUCKET;
	const key = process.env.SEARCH_CRITERIA_FILE;

	const getObjectCommand = new GetObjectCommand({ Bucket: bucket, Key: key });
	const response = await s3Client.send(getObjectCommand);
	const str = await response.Body.transformToString();
	return JSON.parse(str);
};

export default getCriterias;
