"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = exports.createUser = void 0;
const user_1 = require("../models/user");
const createUser = (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const newItem = { id: Date.now(), ...req.body, createdAt: new Date() };
        console.log(newItem);
        user_1.users.push(newItem);
        res.status(201).json(newItem);
    }
    catch (error) {
        next(error);
    }
};
exports.createUser = createUser;
const getUsers = (req, res, next) => {
    try {
        res.json(user_1.users);
    }
    catch (error) {
        next(error);
    }
};
exports.getUsers = getUsers;
