// src/services/todo.service.ts
const BaseRepository = require('../repositories/base.repository')
const Employee = require('../models/Employee');

class EmployeeService {
  baseRepository;

  constructor() {
    this.baseRepository = new BaseRepository(Employee);
  }

  async createEmployee(emplyoeeData) {
    return await this.baseRepository.create(emplyoeeData);
  }

  async getEmployees(page, limit, sortField, sortOrder){
    return await this.baseRepository.findAll(page, limit, sortField, sortOrder);
  }

  async getEmployeeById(id){
    return await this.baseRepository.findById(id);
  }

  async getEmployeeByEmail(email){
    return await this.baseRepository.findByFilter({
        email: email
    })
  }

  async updateEmployee(id, employeeData){
    return await this.baseRepository.update(id, employeeData);
  }

  async deleteEmployee(id){
    return await this.baseRepository.delete(id);
  }
}

const userService = new EmployeeService();
module.exports = userService; 



