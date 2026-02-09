import { Request, Response, NextFunction } from 'express';
import pool from '../repositories/db';
import { findUserByEmail } from '../repositories/userRepository';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_name, email, password } = req.body;

        const query = `
            INSERT INTO users (user_name, email, password) 
            VALUES ($1, $2, $3) 
            RETURNING id, user_name, email, created_at;
        `;

        const values = [user_name, email, password];
        const result = await pool.query(query, values);

        const newUser = result.rows[0];
        console.log('User saved in the db:', newUser);

        res.status(201).json(newUser);
    } catch (error: any) {
        if (error.code === '23505') {
            return res.status(400).json({ message: 'User with this email already exists' });
        }
        next(error);
    }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await pool.query('SELECT id, user_name, email, created_at FROM users ORDER BY id DESC');
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);

        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Authorization error' });
        }

        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        next(error);
    }
};