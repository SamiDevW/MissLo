import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


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
    async getUsers() {
        try {
            const allUsers = await prisma.users.findMany();
            await prisma.$disconnect();
            return allUsers;
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

