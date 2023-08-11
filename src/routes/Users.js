const validate = require("../middlewares/validate")
const schemas = require("../validations/Users")
const authenticate = require("../middlewares/authenticate")
const express = require("express")
const { create, index, update, deleteUser, login, indexById } = require("../controllers/Users")

const router = express.Router();

router.get("/", index)
router.get("/:id", indexById)
router.route("/").post(validate(schemas.createValidation), create)
router.route("/").patch(authenticate, validate(schemas.updateValidation), update)
router.route("/:id").delete(authenticate, deleteUser)
router.route("/login").post(validate(schemas.loginValidation), login)

module.exports = router;