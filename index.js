import { handleFetch } from 'cf-worker-utils';

async function exampleRequestHandler() {
	return new Response('<!doctype html><html><head><title>Hello</title></head><body><p>Hello from a <span>worker</span>!</p></body></html>', {
		headers: {
			'content-type': 'text/html',
		}
	});
}

async function exampleResponseHandler({ request, response }) {
	class SpanHandler {
		element(element) {
			element.before('cool ');
		}
	}

	return new HTMLRewriter()
		.on('span', new SpanHandler())
		.transform(response);
}

handleFetch(exampleRequestHandler, exampleResponseHandler);