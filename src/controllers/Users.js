const httpStatus = require("http-status");
const {
  list,
  insert,
  modify,
  remove,
  loginUser,
} = require("../services/Users");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/hashHelper");

const index = (req, res) => {
  list()
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const create = (req, res) => {
  console.log("Controller : " + req.body);
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const update = (req, res) => {
  // modify({_id : req.user?._id}, req.body).then((response) => {
  modify({ _id: req.body?._id }, req.body)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "User update error" });
    });
};

const deleteUser = (req, res) => {
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "ID value required",
    });
  }
  remove(req.params?.id)
    .then((deletedUser) => {
      if (!deletedUser) {
        return res.status(httpStatus.NOT_FOUND).send({
          message: "User not found",
        });
      }
      res.status(httpStatus.OK).send({
        message: "Delete succeed",
      });
    })
    .catch((e) =>
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .send({ error: "Delete error" })
    );
};

const login = (req, res) => {
  console.log(req.body);
  req.body.password = passwordToHash(req.body.password);
  console.log(req.body.password);
  loginUser(req.body)
    .then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found" });
      }

      user = {
        ...user.toObject(),
        access_token : generateAccessToken(user),
        refresh_token : generateRefreshToken(user)
      }
      delete user.password
      console.log(user);

      res.status(httpStatus.OK).send(user);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

module.exports = {
  index,
  create,
  update,
  deleteUser,
  login,
};
