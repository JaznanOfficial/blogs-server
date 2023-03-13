const express = require("express");
const {
    getCategoriesService,
    postCategoriesService,
    deleteCategoriesService,
    updateCategoriesService,
} = require("../Services/categories.service");

const getCategoriesController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await getCategoriesService(query);
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
const postCategoriesController = async (req, res) => {
    try {
        const data = req.body;
        // console.log(data);
        const users = await postCategoriesService(data);
        console.log(users);
        res.status(200).json({
            status: "Successful",
            message: "Data added successfully",
        });
    } catch (error) {
        res.json(error);
    }
};

const deleteCategoriesController = async (req, res) => {
    try {
        const query = req.query;
        // console.log(query);
        const users = await deleteCategoriesService(query);
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
const updateCategoriesController = async (req, res) => {
    try {
        const query = req.query;
        const data = req.body;
        // console.log(query);
        const users = await updateCategoriesService(query, data);
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
    getCategoriesController,
    postCategoriesController,
    deleteCategoriesController,
    updateCategoriesController,
};
