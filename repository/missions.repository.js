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
            throw new Error(err)
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
            throw new Error(err)
        }
    }
    async getMissionById(idMission) {
        try {
            const mission = await prisma.missions.findUnique({
                where: { idMission: parseInt(idMission) }
            });
            await prisma.$disconnect();
            return mission;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            throw new Error(err)
        }
    }
    async updateMission(idMission, { title,
        description,
        startDate,
        endDate,
    }) {
        try {
            const mission = await prisma.missions.update({
                where: { idMission: parseInt(idMission) },
                data:
                {
                    title,
                    description,
                    startDate,
                    endDate,
                }
            });
            await prisma.$disconnect();
            return mission;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            throw new Error(err)
        }
    }
    async deleteMission(idMission) {
        try {
            const mission = await prisma.missions.delete({
                where: { idMission: parseInt(idMission) }
            });
            await prisma.$disconnect();
            return mission;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            throw new Error(err)
        }
    }
}


export default MissionsRepository;
