const express = require("express");
const {
    getBlogsService,
    postBlogsService,
    deleteBlogsService,
    updateBlogsService,
} = require("../Services/blogs.service");

const getBlogsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await getBlogsService(query);
        console.log(users);
        if (users.length === 0) {
            return res.status(200).json({
                message:
                    "You've no data or entered a wrong queries. please insert first then find data or check your queries",
            });
        }
        return res.status(200).json(users);
    } catch (error) {
        res.json(error.message);
    }
};
const postBlogsController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const users = await postBlogsService(data);
        console.log(users);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteBlogsController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await deleteBlogsService(query);
        console.log(users);
        if (users.acknowledged && !users.deletedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to delete.",
            });
        } else if (users.acknowledged && users.deletedCount) {
            return res.status(200).json({
                status: "Successful",
                message: "Data deleted successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};
const updateBlogsController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const users = await updateBlogsService(query, data);
        console.log(users);
        if (users.acknowledged && !users.matchedCount) {
            return res.status(404).json({
                status: "Failed",
                message: "We didn't find any user to update.",
            });
        } else if (users.matchedCount && users.modifiedCount) {
            return res.status(200).json({
                status: "Successful",
                message: "Data update successfully",
            });
        }
        return res.status(500).json({
            status: "Failed",
            message: "Something wrong! please try again or contact with us",
        });
    } catch (error) {
        res.json(error);
    }
};

module.exports = {
    getBlogsController,
    postBlogsController,
    deleteBlogsController,
    updateBlogsController,
};
