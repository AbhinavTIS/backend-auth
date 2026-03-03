import { Request, Response, NextFunction } from "express";
import {
  createTaskService,
  getAllTasksService,
  getTaskByIdService,
  updateTaskService,
  deleteTaskService,
} from "../services/task.service";

import {
  createTaskSchema,
  updateTaskSchema,
} from "../validators/task.validator";

export const createTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = createTaskSchema.parse(req.body);
    const task = await createTaskService(validated);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tasks = await getAllTasksService(req.query.projectId as string);
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

export const getTaskById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const task = await getTaskByIdService(req.params.id as string);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = updateTaskSchema.parse(req.body); // missing this!

    const task = await updateTaskService(req.params.id as string, validated);
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteTaskService(req.params.id as string);
    res.status(200).json({ message: "Task deleted" });
  } catch (error) {
    next(error);
  }
};
