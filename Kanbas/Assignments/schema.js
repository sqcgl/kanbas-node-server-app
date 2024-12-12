import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    title: String,
    course: { type: mongoose.Schema.Types.String, ref: "CourseModel" },
  },
  { collection: "assignments" }
);
export default schema;
