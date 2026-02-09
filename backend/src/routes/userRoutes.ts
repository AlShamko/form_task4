import { Router } from 'express';
import {
    createUser,
    deleteUnverified,
    deleteUsers,
    getUsers,
    loginUser,
    updateUsersStatus
} from "../controllers/usersController";

const router = Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', loginUser);
router.delete('/', deleteUsers);
router.patch('/status', updateUsersStatus);
router.delete('/unverified', deleteUnverified);
// router.get('/:id', getItemById);
// router.put('/:id', updateItem);
// router.delete('/:id', deleteItem);



export default router;