
const { GraphQLString, GraphQLNonNull} = require("graphql");

const authService = require('../../services/auth.service');

const authQuery = {    
    login: {
        type: GraphQLString,
        args: {
            email: {type: GraphQLNonNull(GraphQLString)},
            password: {type: GraphQLNonNull(GraphQLString)}
        },
        async resolve(parent, args){
            const authResp = await authService.login(args)
            return authResp.accessToken;
        }
    },
}


module.exports = authQuery