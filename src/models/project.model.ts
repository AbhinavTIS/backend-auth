import mongoose, { Schema, Document } from "mongoose";
import { User } from "./user.model";

export interface IProject extends Document {
  name: string;
  description: string;
  owner: mongoose.Types.ObjectId;
}

const projectSchema = new Schema<IProject>(
  {
    name: { type: String, required: true },
    description: { type: String },
    owner: { type: Schema.Types.ObjectId, ref: User, required: true },
  },
  {
    timestamps: true,
  },
);

export const Project = mongoose.model<IProject>("Project", projectSchema);
