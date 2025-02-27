import UsersService from "../services/users.service.js";


class UsersController {
    constructor() {
        this.usersService = new UsersService()
    }
    async createUser(req, res, next) {
        if (!req.body?.name ||
            !req.body?.email ||
            !req.body?.username ||
            !req.body?.password ||
            !req.body?.user_role) {
            res.status(400).json({ message: 'Mauvaise requête, éléments manquants' })
        }
        try {
            const user = await this.usersService.createUser(req.body);
            res.status(201).json({ user, message: `Un compte pour ${user.username} a été crée` })
        } catch (err) {
            next(err)
        }
    }
    async loginUser(req, res, next) {
        if (!req.body?.email || !req.body?.password) res.status(400).json({ message: 'Mauvaise requête, éléments manquants' })
        try {
            const { email, password } = req.body
            const userCred = await this.usersService.loginUser(password, email)
            const options = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: '',
                expires: new Date(Date.now() + 3600000)
            }
            res.cookie('token', userCred.token, options)
            res.status(200).json({ message: `Bon retour ${userCred.foundUser.name}` })
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
    async logoutUser(req, res, next) {
        if (!req.cookies?.token) res.status(200).json({ message: 'logged out' })
        try {
            res.clearCookie('token')
            res.status(200).json({ message: `A bientôt` })
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
}
export default UsersController;