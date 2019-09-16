const express = require("express");

const server = express();
server.use(express.json());

const projects = [{ id: "", title: "", tasks: [] }];

server.get("/projects", (req, res) => {
  return res.json(projects);
});

server.post("/projects", (req, res) => {
  console.log("req.body", req.body);
  // const { payload } = req.body;

  projects.push(req.body);

  return res.json(projects);
});

server.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  projects[id] = req.body;
  return res.json(projects);
});

server.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  projects.splice(id);
  return res.send();
});

server.post("/projects/:id/tasks", (req, res) => {
  projects.push(req.body);
  return res.json(projects);
});

server.listen(3000);
