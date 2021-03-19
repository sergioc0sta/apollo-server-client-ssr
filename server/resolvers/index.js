const persons = require('../data');

const resolvers = {
	Query: {
		persons: ()=> persons,
	}
};

module.exports = resolvers;