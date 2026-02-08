import { Request, Response, NextFunction } from 'express';
import {User, users} from "../models/user";

export const createUser = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userName, email, password } = req.body;
        const newItem: User = { id: Date.now(), ...req.body, createdAt: new Date() };
        console.log(newItem)
        users.push(newItem);
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(users);
    } catch (error) {
        next(error);
    }
};
