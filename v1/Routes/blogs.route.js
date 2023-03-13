const express = require("express");
const {
    getBlogsController,
    postBlogsController,
    deleteBlogsController,
    updateBlogsController,
} = require("../Controllers/blogs.controller");

const router = express.Router();

router
    .route("/")
    .get(getBlogsController)
    .post(postBlogsController)
    .delete(deleteBlogsController)
    .patch(updateBlogsController);

module.exports = router;
