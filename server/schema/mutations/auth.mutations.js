const { GraphQLString, GraphQLNonNull, GraphQLScalarType} = require("graphql");

const UserType = require("../types/user.type");

const authService = require('../../services/auth.service');

const authMutations = {    
    register: {
        type: UserType,
        args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            email: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)},
            role: {type: GraphQLNonNull(GraphQLString)}
        },
        async resolve(parent, args){
            const authResp = await authService.register(args)
            return authResp;
        }
    }
    
}


module.exports = authMutations