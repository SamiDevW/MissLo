import { PrismaClient } from '@prisma/client';
import errorHandler from './dbErrors/errorHandler.js';
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
            errorHandler(err)
        }
    }
    async getCandidaturesByUser(idUser) {
        try {
            const candidature = await prisma.candidatures.findMany({
                where: {
                    idUser: idUser
                },
                include: {
                    missions: true
                }
            });
            await prisma.$disconnect();
            return candidature;
        } catch (err) {
            console.error(err)
            await prisma.$disconnect();
            errorHandler(err)
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
            errorHandler(err)
        }
    }
}


export default CandidaturesRepository;
