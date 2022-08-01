const Users = require("../models/users.models");
const validateUser = require("../validation/users.validation");
const AddUser = async (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      await Users.findOne({ UserEmail: req.body.UserEmail }).then(
        async (exist) => {
          if (exist) {
            errors.UserEmail = "User Exist";
            res.status(404).json(errors);
          } else {
            await Users.create(req.body);
            res.status(201).json({ message: "user added with success" });
          }
        }
      );
    }
  } catch (error) {
    console.log(error.message);
  }
};

const findAllUsers = async (req, res) => {
  try {
    const data = await Users.find();
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const findSingleUser = async (req, res) => {
  try {
    const data = await Users.findOne({ _id: req.params.id });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

const UpdateUser = async (req, res) => {
  const { errors, isValid } = validateUser(req.body);
  try {
    if (!isValid) {
      res.status(404).json(errors);
    } else {
      const data = await Users.findOneAndUpdate(
        { _id: req.params.id },
        req.body
      );
      res.status(201).json(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const DeleteUser = async (req, res) => {
  try {
    const data = await Users.deleteOne({ _id: req.params.id });
    res.status(201).json({ message: "user deleted with success" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  AddUser,
  findAllUsers,
  findSingleUser,
  UpdateUser,
  DeleteUser,
};
