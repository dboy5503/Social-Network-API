import { Router } from 'express';
import {
  getAllUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} from '../../controllers/userController.js';

const router = Router();

// /api/users
router.route('/').get(getAllUsers).post(createUser);
// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);
// /api/users/:userID/friends/:friendId
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

export { router as userRouter };