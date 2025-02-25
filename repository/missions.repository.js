import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class MissionsRepository {
    async createMission({
        title,
        description,
        startDate,
        endDate,
        idUser }) {
        try {
            const mission = await prisma.missions.create({
                data: {
                    title,
                    description,
                    startDate,
                    endDate,
                    idUser
                }
            });
            await prisma.$disconnect();
            return mission;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            process.exit(1)
        }
    }
    async getMissions() {
        try {
            const allMissions = await prisma.missions.findMany();
            await prisma.$disconnect();
            return allMissions;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            process.exit(1);
        }
    }
    async getUserById(email) {
        try {
            const user = await prisma.users.findFirst({
                where: { email: email }
            });
            await prisma.$disconnect();
            return user;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            process.exit(1);
        }
    }
}


export default MissionsRepository;
