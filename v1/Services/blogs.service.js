const Blogs = require("../Models/blogs.model");

const getBlogsService = async (query) => {
    const result = await Blogs.find(query);
    console.log(result);
    return result;
};
const postBlogsService = async (data) => {
    const result = await Blogs.create(data);
    console.log(result);
    return result;
};

const deleteBlogsService = async (query) => {
    const result = await Blogs.deleteMany(query);
    console.log(result);
    return result;
};
const updateBlogsService = async (query, data) => {
    const result = await Blogs.updateOne(query, data);
    console.log(result);
    return result;
};

module.exports = { getBlogsService, postBlogsService, deleteBlogsService, updateBlogsService };
