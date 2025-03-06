import UsersRepository from "../repository/users.repository.js";
import ExpressError from "../utils/ExpressError.js";
import { hashPassword, checkPassword } from "./auth/argonAuth.js";
import { jwtSign } from "./auth/jwtAuth.js";

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
        if (!foundUser) throw new ExpressError(401, 'Mot de passe ou identifiant incorrect')
        const match = await checkPassword(foundUser.password, password)
        if (!match) throw new ExpressError(401, 'Mot de passe ou identifiant incorrect')
        else {
            const token = jwtSign(foundUser);
            return { foundUser, token }
        }

    }
    async getUserById(idUser) {
        const user = this.usersRepository.getUserById(idUser)
        return user;
    }
}
export default UsersService;