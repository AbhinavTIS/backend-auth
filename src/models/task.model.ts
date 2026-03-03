import mongoose, { Schema, Document } from "mongoose";

export enum TaskStatus {
  TODO = "TODO",
  IN_PROGRESS = "IN_PROGRESS",
  DONE = "DONE",
}

export interface ITask extends Document {
  title: string;
  description?: string;
  status: TaskStatus;
  projectId: mongoose.Types.ObjectId;
  dueDate?: Date;
}

const taskSchema = new Schema<ITask>(
  {
    title: { type: String, required: true },
    description: { type: String },
    status: {
      type: String,
      enum: Object.values(TaskStatus),
      default: TaskStatus.TODO,
    },
    projectId: { type: Schema.Types.ObjectId, ref: "Project", required: true },
    dueDate: { type: Date },
  },
  { timestamps: true },
);

export const Task = mongoose.model<ITask>("Task", taskSchema);
