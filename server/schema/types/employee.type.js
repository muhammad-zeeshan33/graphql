const { GraphQLObjectType, GraphQLID, GraphQLString} = require("graphql");

const EmployeeType = new GraphQLObjectType({
    name: "Employee",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLString},
        class: {type: GraphQLString},
    })
})

module.exports = EmployeeType
