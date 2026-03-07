const Task = require('../models/Task');

class TaskRepository {

  async getAllTasks() {
    return Task.find().sort({ createdAt: -1 });
  }

  async createTask(data) {
    const task = new Task(data);
    return task.save();
  }

  async updateTask(id, data) {
    return Task.findByIdAndUpdate(
      id,
      { $set: data },
      { new: true, runValidators: true }
    );
  }

  async deleteTask(id) {
    return Task.findByIdAndDelete(id);
  }
}

module.exports = new TaskRepository();