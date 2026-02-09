import { Router } from 'express';
import {createUser, getUsers, loginUser} from "../controllers/usersController";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
// router.get('/:id', getItemById);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);



export default router;