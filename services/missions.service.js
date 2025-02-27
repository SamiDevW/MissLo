import MissionsRepository from "../repository/missions.repository.js";
class MissionsService {
    constructor() {
        this.missionsRepository = new MissionsRepository()
    }
    async createMission() {
        const mission = await this.missionsRepository.createMission()
    }
}