// services/project.service.ts
import { Project } from "../models/project.model";

export const createProjectService = async (
  data: { name: string; description?: string },
  ownerId: string,
) => {
  const project = await Project.create({ ...data, owner: ownerId });
  return project;
};

export const getAllProjectsService = async (userId: string) => {
  const projects = await Project.find({ owner: userId });
  return projects;
};

export const getProjectByIdService = async (id: string) => {
  const project = await Project.findById(id);
  if (!project) throw new Error("Project not found");
  return project;
};

export const updateProjectService = async (
  id: string,
  data: { name?: string; description?: string },
) => {
  const project = await Project.findByIdAndUpdate(id, data, { new: true });
  if (!project) throw new Error("Project not found");
  return project;
};

export const deleteProjectService = async (id: string, userId: string) => {
  const project = await Project.findById(id);
  if (!project) throw new Error("Project not found");

  if (project.owner.toString() !== userId) {
    throw new Error("Not authorized to delete this project");
  }

  await project.deleteOne();
};
