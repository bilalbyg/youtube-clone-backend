const httpStatus = require("http-status");
const {
  list,
  listById,
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

const indexById = (req, res) => {
  if (!req?.params?.id) {
    return res
      .status(httpStatus.BAD_REQUEST)
      .send({ message: "ID value required" });
  }

  listById(req.params.id)
    .then((response) => {
      res.status(httpStatus.OK).send(response);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
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
  req.body.password = passwordToHash(req.body.password);
    
  loginUser(req.body)
    .then((user) => {
      if (!user) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "User not found" });
      }

      console.log(user);
      user = {
        ...user.toObject(),
        access_token: generateAccessToken(user),
        refresh_token: generateRefreshToken(user),
      };
      delete user.password;

      res.status(httpStatus.OK).send(user);
    })
    .catch((error) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error);
    });
};

module.exports = {
  index,
  indexById,
  create,
  update,
  deleteUser,
  login,
};
