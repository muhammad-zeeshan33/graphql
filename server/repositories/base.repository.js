// src/repositories/base.repository.ts
class BaseRepository {
  model;

  constructor(model) {
    this.model = model;
  }

  async create(item){
    const newItem = new this.model(item);
    return await newItem.save();
  }

  async findById(id) {
    return await this.model.findById(id).exec();
  }

  async findByFilter(filter){
    return await this.model.findOne(filter);
  }

  async findAll(page, limit, sortField, sortOrder){
    const skip = (page - 1) * limit;
    const sort = { [sortField]: sortOrder === "asc" ? 1 : -1 };
    return await this.model.find().sort(sort).skip(skip).limit(limit).exec();
  }

  async update(id, item){
    return await this.model.findByIdAndUpdate(id, item, { new: true }).exec();
  }

  async delete(id){
    const result = await this.model.findByIdAndDelete(id).exec();
    return result !== null;
  }
}

module.exports = BaseRepository;
