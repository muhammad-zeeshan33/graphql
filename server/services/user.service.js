// src/services/todo.service.ts
const BaseRepository = require('../repositories/base.repository')
const User = require('../models/User');

class UserService {
  baseRepository;

  constructor() {
    this.baseRepository = new BaseRepository(User);
  }

  async createUser(userData) {
    return await this.baseRepository.create(userData);
  }

  async getUsers(page, limit, sortField, sortOrder){
    return await this.baseRepository.findAll(page, limit, sortField, sortOrder);
  }

  async getUserById(id){
    return await this.baseRepository.findById(id);
  }

  async getUserByEmail(email){
    return await this.baseRepository.findByFilter({
        email: email
    })
  }

  async updateUser(id, userData){
    return await this.baseRepository.update(id, userData);
  }

  async deleteUser(id){
    return await this.baseRepository.delete(id);
  }
}

const userService = new UserService();
module.exports = userService; 



