import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
class CandidaturesRepository {
    async createCandidature(idMission, idUser) {
        try {
            const candidature = await prisma.candidatures.create({
                data: {
                    idMission: parseInt(idMission),
                    idUser: parseInt(idUser)
                }
            });
            await prisma.$disconnect();
            return candidature;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            throw new Error(err)
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
            throw new Error(err)
        }
    }
    async updateCandidature(idCandidature, status) {
        try {
            const candidature = await prisma.candidatures.update({
                where: { idCandidature: parseInt(idCandidature) },
                data: { status: status }
            });
            await prisma.$disconnect();
            return candidature;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            throw new Error(err)
        }
    }

}


export default CandidaturesRepository;
