const validate = require("../middlewares/validate")
const authenticate = require("../middlewares/authenticate")
const express = require("express")
const { index, indexById, indexByVideoId, create, update, deleteComment } = require("../controllers/Comments")

const router = express.Router();

router.get("/", index)
router.get("/:id", indexById)
router.get("/video/:videoId", indexByVideoId)
router.route("/").post(create)
router.route("/").patch(authenticate, update)
router.route("/:id").delete(authenticate, deleteComment)

module.exports = router;