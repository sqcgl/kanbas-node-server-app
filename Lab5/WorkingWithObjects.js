import { title } from "process";

const assignment = {
  id: 1,
  title: "NodeJS Assignment",
  description: "Create a NodeJS server with ExpressJS",
  dueDate: "2021-10-10",
  complete: false,
  score: 0,
};
const module = {
  id: 1,
  name: "NodeJS",
  description:
    "NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  course: "Web Development",
};
export default function WorkingWithObjects(app) {
  app.get("/lab5/assignment", (req, res) => {
    res.json(assignment);
  });
  app.get("/lab5/assignment/title", (req, res) => {
    res.send(assignment.title);
  });
  app.get("/lab5/assignment/title/:newTitle", (req, res) => {
    const { newTitle } = req.params;
    assignment.title = newTitle;
    res.json(assignment.title);
  });

  app.get("/lab5/module", (req, res) => {
    res.json(module);
  });
  app.get("/lab5/module/name", (req, res) => {
    res.send(module.name);
  });
  app.get("/lab5/module/name/:newName", (req, res) => {
    const { newName } = req.params;
    module.name = newName;
    res.json(module.name);
  });
}
