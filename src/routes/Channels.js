const validate = require("../middlewares/validate")
const schemas = require("../validations/Channels")
const authenticate = require("../middlewares/authenticate")
const express = require("express")
const { index, create, update, deleteChannel } = require("../controllers/Channels")

const router = express.Router();

router.get("/", index)
router.route("/").post(validate(schemas.createValidation), create)
router.route("/").patch(authenticate, validate(schemas.updateValidation), update)
router.route("/:id").delete(authenticate, deleteChannel)

module.exports = router;