const Categories = require("../Models/categories.model");

const getCategoriesService = async (query) => {
    const result = await Categories.find(query);
    console.log(result);
    return result;
};
const postCategoriesService = async (data) => {
    const result = await Categories.create(data);
    console.log(result);
    return result;
};

const deleteCategoriesService = async (query) => {
    const result = await Categories.deleteMany(query);
    console.log(result);
    return result;
};
const updateCategoriesService = async (query, data) => {
    const result = await Categories.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = {
    getCategoriesService,
    postCategoriesService,
    deleteCategoriesService,
    updateCategoriesService,
};
