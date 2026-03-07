const taskRepository = require('../repositories/taskRepository');

class TaskService {

  async getTasks() {
    return taskRepository.getAllTasks();
  }

  async createTask(taskData) {
    if (!taskData.title || !taskData.description) {
      throw new Error("Title and description are required");
    }

    return taskRepository.createTask(taskData);
  }

  async updateTask(id, data) {
    return taskRepository.updateTask(id, data);
  }

  async deleteTask(id) {
    return taskRepository.deleteTask(id);
  }
}

module.exports = new TaskService();