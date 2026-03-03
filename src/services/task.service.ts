import { Task } from "../models/task.model";
import { Project } from "../models/project.model";

export const createTaskService = async (data: {
  title: string;
  description?: string;
  projectId: string;
  dueDate?: Date;
}) => {
  const project = await Project.findById(data.projectId);
  if (!project) throw new Error("Project not found");

  const task = await Task.create(data);
  return task;
};

export const getAllTasksService = async (projectId: string) => {
  if (!projectId) throw new Error("projectId is required");
  const tasks = await Task.find({ projectId });
  return tasks;
};

export const getTaskByIdService = async (id: string) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task not found");
  return task;
};

export const updateTaskService = async (
  id: string,
  data: {
    title?: string;
    description?: string;
    status?: string;
    dueDate?: Date;
  },
) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  if (!task) throw new Error("Task not found");
  return task;
};

export const deleteTaskService = async (id: string) => {
  const task = await Task.findById(id);
  if (!task) throw new Error("Task not found");
  await task.deleteOne();
};
