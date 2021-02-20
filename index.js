import { handleFetch } from 'cf-worker-utils';

async function exampleRequestHandler () {
	return new Response('Hello from a worker!', {
		headers: {
			'content-type': 'text/plain',
		}
	});
}

handleFetch(exampleRequestHandler);
