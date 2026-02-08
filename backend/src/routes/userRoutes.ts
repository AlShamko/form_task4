import { Router } from 'express';
import {createUser, getUsers} from "../controllers/usersController";

const router = Router();

router.get('/users', getUsers);
// router.get('/:id', getItemById);
router.post('/users', createUser);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);

export default router;