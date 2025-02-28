import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


class MissionsRepository {
    async createMission(idUser, {
        title,
        description,
        startDate,
        endDate }) {
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
            errorHandler(err)
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
            errorHandler(err)
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
            errorHandler(err)
        }
    }
    async getCandidaturesByMission(idMission) {
        try {
            const allcandidatures = await prisma.missions.findUnique({

                where: { idMission: parseInt(idMission) }
                , include: {
                    candidatures: {
                        include: {
                            users: {
                                select: {
                                    username: true
                                }
                            }
                        }

                    }
                }
            });
            await prisma.$disconnect();
            return allcandidatures;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            errorHandler(err)
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
            errorHandler(err)
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
            errorHandler(err)
        }
    }
}


export default MissionsRepository;
