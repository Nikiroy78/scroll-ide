const express = require('express');
const app = express();
const fport = require("find-free-port");

module.exports = async (cb) => {
	const listener = app.listen(
		(await fport(32770, '127.0.0.1'))[0],
		'127.0.0.1',
		(err) => {
			if (err)
				throw err;
			else {
				const port = listener.address().port;
				cb(
					'127.0.0.1',
					port
				);
			}
		}
	);
}