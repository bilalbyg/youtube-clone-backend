const validate = require("../middlewares/validate")

const schemas = require("../validations/Users")

const express = require("express")
const { create, index, update, deleteUser, login } = require("../controllers/Users")

const router = express.Router();

router.get("/", index)
router.route("/").post(validate(schemas.createValidation), create)
router.route("/").patch(update)
router.route("/:id").delete(deleteUser)
router.route("/login").post(login)

module.exports = router;