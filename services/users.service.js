import UsersRepository from "../repository/users.repository.js";
import { hashPassword, checkPassword } from "./auth/argonAuth.js";

class UsersService {
    constructor() {
        this.usersRepository = new UsersRepository()
    }
    async createUser({
        name,
        email,
        username,
        password,
        user_role
    }) {
        const hashedPassword = await hashPassword(password)
        const user = await this.usersRepository.createUser({
            name,
            email,
            username,
            password: hashedPassword,
            user_role
        })
        return user;
    }
    async loginUser(password, email) {
        const foundUser = await this.usersRepository.getUserByEmail(email)
        if (!foundUser) throw new Error('wrong credentials')
        const match = await checkPassword(foundUser.password, password)
        if (!match) throw new Error('wrong credentials')
        //JWT
        // return JWT
        return foundUser
    }
}
export default UsersService;