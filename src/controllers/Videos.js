const httpStatus = require("http-status")
const { list, insert, modify, remove, listById } = require("../services/Videos")

const index = (req, res) => {
    list().then((response) => {
        res.status(httpStatus.OK).send(response)
    }).catch((error) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    })
}

const indexById = (req, res) => {
  
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: "ID value required",
    });
  }
  
  listById(req.params?.id).then((response) => {
    res.status(httpStatus.OK).send(response)
  }).catch((error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
  })
}

const create = (req, res) => {
    insert(req.body).then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((error) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    })
}

const update = (req, res) => {
    modify({ _id : req.body?._id}, req.body).then((response) => {
        res.status(httpStatus.CREATED).send(response)
    }).catch((error) => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error)
    })
}

const deleteVideo = (req, res) => {
    if (!req.params?.id) {
      return res.status(httpStatus.BAD_REQUEST).send({
        message: "ID value required",
      });
    }
    remove(req.params?.id)
      .then((deletedChannel) => {
        if (!deletedChannel) {
          return res.status(httpStatus.NOT_FOUND).send({
            message: "Video not found",
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

module.exports = {
    index, indexById, create, update, deleteVideo
}