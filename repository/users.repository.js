import prisma from './connectDB.js';
import errorHandler from './dbErrors/errorHandler.js';


class UsersRepository {
    async createUser({
        name,
        email,
        username,
        password,
        user_role }) {
        try {
            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    username,
                    password,
                    user_role
                }
            });
            await prisma.$disconnect();
            return user;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            errorHandler(err)
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await prisma.users.findUnique({
                where: { email: email }
            });
            await prisma.$disconnect();
            return user;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            errorHandler(err)
        }
    }
}


export default UsersRepository;

