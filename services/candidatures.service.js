import candidaturesRepository from "../repository/candidatures.repository.js";
class CandidaturesService {
    constructor() {
        this.candidaturesRepository = new candidaturesRepository()
    }
    async createCandidature(idMission, idUser) {
        const candidature = await this.candidaturesRepository.createCandidature(idMission, idUser)
        return candidature;
    }

    async updateCandidature(idCandidature, status) {
        const candidature = await this.candidaturesRepository.updateCandidature(idCandidature, status)
        return candidature
    }
    async getCandidaturesByUser(idUser) {
        const candidatures = await this.candidaturesRepository.getCandidaturesByUser(idUser)
        return candidatures
    }
}
export default CandidaturesService;