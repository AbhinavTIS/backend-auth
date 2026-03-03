// controllers/project.controller.ts
import { Request, Response, NextFunction } from "express";
import {
  createProjectService,
  getAllProjectsService,
  getProjectByIdService,
  updateProjectService,
  deleteProjectService,
} from "../services/project.service";

import {
  createProjectSchema,
  updateProjectSchema,
} from "../validators/project.validator";

export const createProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = createProjectSchema.parse(req.body);

    const project = await createProjectService(validated, req.user!.userId);
    res.status(201).json(project);
  } catch (error) {
    next(error);
  }
};

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const projects = await getAllProjectsService(req.user!.userId);
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

export const getProjectById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const project = await getProjectByIdService(req.params.id as string);
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const validated = updateProjectSchema.parse(req.body);
    const project = await updateProjectService(
      req.params.id as string,
      validated,
    );
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    await deleteProjectService(req.params.id as string, req.user!.userId);
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    next(error);
  }
};
