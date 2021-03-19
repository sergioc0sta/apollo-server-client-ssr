const server = require('./config/server');

server.listen().then(({ url }) => {
	console.log(`🚀  Server ready at ${url}`);
});