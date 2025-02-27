import candidaturesRepository from "../repository/candidatures.repository.js";
class CandidaturesService {
    constructor() {
        this.candidaturesRepository = new candidaturesRepository()
    }
    async createCandidature(idMission, idUser) {
        const candidature = await this.candidaturesRepository.createCandidature(idMission, idUser)
        return candidature;
    }
    async getCandidaturesByMission(idMission) {
        const candidatures = await this.candidaturesRepository.getCandidaturesByMission(idMission)
        return candidatures;
    }
    async updateCandidature(idCandidature, status) {
        const candidature = await this.candidaturesRepository.updateCandidature(idCandidature, status)
        return candidature
    }
    async deleteMission(idMission) {
        const mission = await this.candidaturesRepository.deleteMission(idMission)
        return mission
    }
}
export default CandidaturesService;