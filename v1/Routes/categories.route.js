const express = require("express");
const {
    getCategoriesController,
    postCategoriesController,
    deleteCategoriesController,
    updateCategoriesController,
} = require("../Controllers/categories.controller");

const router = express.Router();

router
    .route("/")
    .get(getCategoriesController)
    .post(postCategoriesController)
    .delete(deleteCategoriesController)
    .patch(updateCategoriesController);

module.exports = router;
