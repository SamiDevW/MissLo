import UsersService from "../services/users.service.js";

class UsersController {
    constructor() {
        this.usersSevice = new UsersService()
    }
    async createUser(req, res) {
        if (!req.body?.name || !req.body?.email || !req.body?.username || !req.body?.password || !req.body?.user_role) {
            res.status(400).json({ message: 'Bad Request' })
        }
        const user = await this.usersSevice.createUser(req.body);
        res.status(201).json({ user, message: `${user.username} has been created` })
    }
    async loginUser(req, res) {
        if (!req.body?.email || !req.body?.password) res.status(400).json({ message: 'Bad Request' })
        const { email, password } = req.body
        const user = await this.usersSevice.loginUser(password, email)
        res.status(200).json({ message: `Welcome back ${user.name}` })
    }
}
export default UsersController;