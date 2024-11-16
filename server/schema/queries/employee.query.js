const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLInt, GraphQLString } = require("graphql");

const EmployeeType = require('../types/employee.type')

const employeeService = require('../../services/employee.service');

const { authMiddleware } = require('../../middleware/auth');


const employeeFields = {    
    employees: {
        type: new GraphQLList(EmployeeType),
        args: {
            page: {type: GraphQLInt,  defaultValue: 1 },
            limit: {type: GraphQLInt, defaultValue: 1 },
            sortField: {type: GraphQLString, defaultValue: "name" },
            sortOrder: {type: GraphQLString, defaultValue: "asc" },
        },
        resolve(parent, args, context){
            authMiddleware(context);
            return employeeService.getEmployees(args.page, args.limit, args.sortField, args.sortOrder)
        }
    },
    employee: {
        type: EmployeeType,
        args: {id: {type: GraphQLID}},
        resolve(parent, args, context){
            authMiddleware(context);
            return Employee.findById(args.id)
        }
    }   
}

module.exports = employeeFields