const validate = require("../middlewares/validate")
// const schemas = require("../validations/Channels")
const authenticate = require("../middlewares/authenticate")
const express = require("express")
const { index, create, update, deleteVideo } = require("../controllers/Videos")

const router = express.Router();

router.get("/", index)
router.route("/").post(create)
router.route("/").patch(authenticate, update)
router.route("/:id").delete(authenticate, deleteVideo)

module.exports = router;