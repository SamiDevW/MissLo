import MissionsService from '../services/missions.service.js'
const missionsService = new MissionsService();
const isMissionAuthor = async (req, res, next) => {
    const { idMission } = req.params
    const mission = await missionsService.getMission(idMission)
    if (req.idUser !== mission.idUser) return res.status(403).json({ message: "vous n'etes pas autorisé" })
    next()
}
export default isMissionAuthor;