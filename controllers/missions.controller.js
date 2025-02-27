import MissionsService from "../services/missions.service.js";
class MissionsController {
    constructor() {
        this.missionsService = new MissionsService()
    }
    async createMission(req, res, next) {
        if (!req.body?.title || !req.body?.description || !req.body?.startDate || !req.body?.endDate || !req.body?.idUser) {
            res.status(400).json({ message: 'Bad Request' })
        }
        try {
            const mission = await this.missionsService.createMission(req.body)
            res.status(201).json({ mission, message: `La mission ${mission.title} a été créée` })
        } catch (err) {
            console.error(err);
            next(err)

        }
    }
    async getMissions(req, res, next) {
        try {
            const missions = await this.missionsService.getMissions()
            if (missions.length < 1) return res.status(200).json({ message: "Aucune mission n'a été enregistrée." });
            res.status(200).json(missions);
        } catch (err) {
            console.error(err);
            next(err)

        }
    }
    async getMission(req, res, next) {
        try {
            const { idMission } = req.params
            const mission = await this.missionsService.getMission(idMission)
            if (!mission) return res.status(404).json({ message: "Cette mission n'exsite plus" })
            res.status(200).json(mission);
        } catch (err) {
            console.error(err);
            next(err)
        }
    }
    async updateMission(req, res, next) {
        if (!req.body?.title || !req.body?.description || !req.body?.startDate || !req.body?.endDate) {
            res.status(400).json({ message: 'Mauvaise requête, éléments manquants' })
        }
        try {
            const { idMission } = req.params
            const mission = await this.missionsService.updateMission(idMission, req.body)
            res.status(200).json({ mission, message: `La mission ${mission.title} a été mise à jour` });
        } catch (err) {
            console.error(err);
            next(err)

        }
    }
    async deleteMission(req, res, next) {
        try {
            const { idMission } = req.params
            const mission = await this.missionsService.deleteMission(idMission)
            res.status(200).json({ mission, message: `La mission ${mission.title} a été mise à éffacée` });
        } catch (err) {
            console.error(err);
            next(err)

        }
    }
}

export default MissionsController;