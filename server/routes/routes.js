const express = require("express");
const {
  findAllTodo,
  addTodoRoutes,
  addTodo,
  editTodoRoutes,
  editTodo,
  deleteTodo,
} = require("../controller/controller");
const router = express.Router();
const Todo = require("../model/todos");

// Home Page & Display todo
router.get("/", findAllTodo);

// Add todo page
router.get("/add-todo", addTodoRoutes);

// Added todos
router.post("/", addTodo);

// edit todo
router.get("/edit-todo/:id", editTodoRoutes);

// Updating todos
router.put("/", editTodo);

// Delete todos
router.delete("/", deleteTodo);

// 404
router.use(function (req, res) {
  res.render("404", {
    title: "404 Not Found Page :(",
    layout: "layouts/mainLayout",
  });
});

module.exports = router;
