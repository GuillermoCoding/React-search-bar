const { GraphQLSchema } = require('graphql');
const RootQueryType = require('./root_query_type');

module.exports = new GraphQLSchema({
   query: RootQueryType
});