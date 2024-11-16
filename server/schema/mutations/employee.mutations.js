const { GraphQLString, GraphQLNonNull, GraphQLID } = require("graphql");

const EmployeeType = require("../types/employee.type");

const employeeService = require('../../services/employee.service');

const { adminMiddleware } = require('../../middleware/auth');


const employeeMutations = {
    addEmployee: {
        type: EmployeeType,
        args: {
            name: {type: GraphQLNonNull(GraphQLString)},
            age: {type: GraphQLNonNull(GraphQLString)},
            class: {type: GraphQLNonNull(GraphQLString)},
        },
        async resolve(parent, args, context){
            await adminMiddleware(context);
            return employeeService.createEmployee(args);
        }
    },
    deleteEmployee: {
        type: EmployeeType,
        args: {id: {type: GraphQLNonNull(GraphQLID)}},
        async resolve(parent, args, context){
            await adminMiddleware(context);
            return employeeService.deleteEmployee(args.id)
        }
    },
    updateEmployee: {
        type: EmployeeType,
        args: {
            id: {type: GraphQLNonNull(GraphQLID)},
            name: {type: GraphQLString},
            age: {type: GraphQLString},    
        },
        async resolve(parent, args, context){
            await adminMiddleware(context);
            return employeeService.updateEmployee(args.id, args)
        }
    }
}


module.exports = employeeMutations