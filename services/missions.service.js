import MissionsRepository from "../repository/missions.repository.js";
class MissionsService {
    constructor() {
        this.missionsRepository = new MissionsRepository()
    }
    async createMission({
        title,
        description,
        startDate,
        endDate,
        idUser
    }) {
        const mission = await this.missionsRepository.createMission({
            title,
            description,
            startDate,
            endDate,
            idUser
        })
        return mission;
    }
    async getMissions() {
        const missions = await this.missionsRepository.getMissions()
        return missions;
    }
    async getMission(idMission) {
        const mission = await this.missionsRepository.getMissionById(idMission)
        return mission
    }
    async updateMission(idMission, { title,
        description,
        startDate,
        endDate,
    }) {
        const mission = await this.missionsRepository.updateMission(idMission, {
            title,
            description,
            startDate,
            endDate,
        })
        return mission
    }
    async deleteMission(idMission) {
        const mission = await this.missionsRepository.deleteMission(idMission)
        return mission
    }
}
export default MissionsService;