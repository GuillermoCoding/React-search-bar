const { GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');
const fetchData = require('../controllers/fetchData');

module.exports = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: ()=>({
        suggestions: {
            type: new GraphQLList(GraphQLString),
            args: {
                input: {type: GraphQLString}
            },
            resolve(parentValue,{input}){
                const resultArray = fetchData(input);
                return resultArray;
            }
        }
    })  
});