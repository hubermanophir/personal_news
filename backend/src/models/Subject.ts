import mongoose, { Schema, Document, Types } from "mongoose";

export interface ISubject extends Document {
  createdAt: Date;
  updatedAt: Date;
}

const SubjectSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
  },
  { timestamps: true }
);

const Subject = mongoose.model<ISubject>("Subject", SubjectSchema);

export default Subject;
