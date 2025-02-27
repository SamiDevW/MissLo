import CandidaturesService from "../services/candidatures.service.js";
class CandidaturesController {
    constructor() {
        this.candidaturesService = new CandidaturesService()
    }
    async createCandidature(req, res, next) {
        if (!req.body?.idMission) {
            res.status(400).json({ message: 'Bad Request' })
        }
        try {
            const { idMission, idUser } = req.body
            const candidature = await this.candidaturesService.createCandidature(idMission, idUser)
            res.status(201).json({ candidature, message: `candidature ${candidature.idMission} has been created` })
        } catch (err) {
            console.error(err);
            next(err)

        }
    }
    async getCandidaturesByMission(req, res, next) {
        try {
            const { idMission } = req.params
            const candidatures = await this.candidaturesService.getCandidaturesByMission(idMission)
            res.status(200).json(candidatures);
        } catch (err) {
            console.error(err);
            next(err)

        }

    }
    async updateCandidature(req, res, next) {
        if (!req.body?.status) {
            res.status(400).json({ message: 'Bad Request' })
        }
        try {
            const { idCandidature } = req.params
            const { status } = req.body
            const candidature = await this.candidaturesService.updateCandidature(idCandidature, status)
            res.status(200).json(candidature);
        } catch (err) {
            console.error(err);
            next(err)
        }

    }

}

export default CandidaturesController;