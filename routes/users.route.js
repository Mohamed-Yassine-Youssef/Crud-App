const express = require("express");
const {
  AddUser,
  findAllUsers,
  findSingleUser,
  UpdateUser,
  DeleteUser,
} = require("../controllers/users.controller");
const router = express.Router();

// add user
router.post("/users", AddUser);
// find all users
router.get("/users", findAllUsers);
// find single user
router.get("/users/:id", findSingleUser);
//add user
router.put("/users/:id", UpdateUser);
// remove user
router.delete("/users/:id", DeleteUser);

module.exports = router;
