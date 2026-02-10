import { Request, Response, NextFunction } from 'express';
import pool from '../repositories/db';
import { findUserByEmail } from '../repositories/userRepository';
import bcrypt from 'bcryptjs';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { user_name, email, password } = req.body;

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const query = `
            INSERT INTO users (user_name, email, password) 
            VALUES ($1, $2, $3) 
            RETURNING id, user_name, email, created_at;
        `;

        const values = [user_name, email, hashedPassword];
        const result = await pool.query(query, values);

        res.status(201).json(result.rows[0]);
    } catch (error: any) {
        if (error.code === '23505') {
            return res.status(400).json({ message: 'User already exists' });
        }
        next(error);
    }
};

export const getUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const currentUserEmail = req.headers['x-user-email'];

        if (!currentUserEmail) {
            return res.status(401).json({ message: 'Identification required' });
        }

        const userCheck = await pool.query('SELECT status FROM users WHERE email = $1', [currentUserEmail]);

        if (userCheck.rows.length === 0 || userCheck.rows[0].status === 'blocked') {
            return res.status(403).json({ message: 'Your account is blocked' });
        }

        const query = 'SELECT id, user_name, email, status, created_at FROM users ORDER BY created_at DESC';
        const result = await pool.query(query);
        res.json(result.rows);
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        if (user.status === 'blocked') {
            return res.status(403).json({ message: 'Your account is blocked' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const { password: _, ...userWithoutPassword } = user;
        res.json(userWithoutPassword);
    } catch (error) {
        next(error);
    }
};

export const deleteUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ids } = req.body;

        const query = 'DELETE FROM users WHERE id = ANY($1::int[])';
        await pool.query(query, [ids]);

        res.status(200).json({ message: 'Users deleted' });
    } catch (error) {
        next(error);
    }
};

export const updateUsersStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { ids, status } = req.body;

        if (!Array.isArray(ids) || !status) {
            return res.status(400).json({ message: 'Missing ids or status' });
        }

        const query = 'UPDATE users SET status = $1 WHERE id = ANY($2::int[])';
        await pool.query(query, [status, ids]);

        res.status(200).json({ message: `Users status updated to ${status}` });
    } catch (error) {
        next(error);
    }
};

export const deleteUnverified = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const query = "DELETE FROM users WHERE status != 'active' OR status IS NULL";
        const result = await pool.query(query);

        res.status(200).json({ message: `Deleted ${result.rowCount} unverified users` });
    } catch (error) {
        next(error);
    }
};