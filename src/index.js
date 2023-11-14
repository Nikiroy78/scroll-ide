const render = require('./render');
const server = require('./server');

server(async (host, port) => {
	console.log(`Runned IDE on ${host}:${port}`);
	await render(host, port);
});