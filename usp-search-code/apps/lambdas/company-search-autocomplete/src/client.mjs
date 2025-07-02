import { Client } from '@opensearch-project/opensearch';

const createClient = () => new Client({
	node: process.env.OPENSEARCH_ENDPOINT,
	auth: {
		username: process.env.OPENSEARCH_USER,
		password: process.env.OPENSEARCH_PASS,
	},
});

export default createClient;
