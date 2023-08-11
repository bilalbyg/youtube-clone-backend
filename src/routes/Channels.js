const validate = require("../middlewares/validate")
const schemas = require("../validations/Channels")
const authenticate = require("../middlewares/authenticate")
const express = require("express")
const { index, indexById, create, update, deleteChannel } = require("../controllers/Channels")

const router = express.Router();

router.get("/", index)
router.get("/:id", indexById)
router.route("/").post(validate(schemas.createValidation), create)
router.route("/").patch(authenticate, validate(schemas.updateValidation), update)
router.route("/:id").delete(authenticate, deleteChannel)

module.exports = router;