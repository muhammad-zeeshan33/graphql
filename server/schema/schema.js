
const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const employeeQuries = require('./queries/employee.query');
const authQueries = require('./queries/auth.query')

const employeeMutations = require('./mutations/employee.mutations');
const authMutations = require('./mutations/auth.mutations')

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        ...employeeQuries,
        ...authQueries
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
       ...employeeMutations,
       ...authMutations
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})