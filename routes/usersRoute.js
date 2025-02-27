import express from 'express';
const router = express.Router();
import UsersController from '../controllers/users.controller.js';
const usersController = new UsersController();

router.post('/register', async (req, res, next) => {
    try {
        await usersController.createUser(req, res)
    } catch (err) {
        console.error(err);
    }

})
router.post('/login', async (req, res) => {
    try {
        await usersController.loginUser(req, res)
    } catch (err) {
        console.error(err);
    }
})
export default router;