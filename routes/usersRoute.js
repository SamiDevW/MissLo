import express from 'express';
const router = express.Router();
import UsersController from '../controllers/users.controller.js';
const usersController = new UsersController();

router.post('/register', (req, res, next) => usersController.createUser(req, res, next))
router.post('/login', (req, res, next) => usersController.loginUser(req, res, next))
router.post('/logout', (req, res, next) => usersController.logoutUser(req, res, next))
export default router;