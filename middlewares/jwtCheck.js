import jwt from 'jsonwebtoken';
import UsersService from '../services/users.service.js'
const usersService = new UsersService();
const jwtCheck = async (req, res, next) => {
    if (!req.cookies?.token) return res.status(401).json({ message: "Vous n'êtes pas connécté" })
    try {
        const { token } = req.cookies;
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await usersService.getUserById(decoded.idUser)
        if (!user) return res.status(401).json({ message: "Vous n'êtes pas connécté" })
        if (decoded) {
            req.idUser = decoded.idUser
            req.role = user.user_role
            next()
        }
    } catch (err) {
        console.error(err);
        res.status(401).json({ message: "Vous n'êtes pas connécté" })
    }
}
export default jwtCheck;