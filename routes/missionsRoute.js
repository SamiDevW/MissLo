import express from 'express';
import MissionsController from '../controllers/missions.controller.js';
import { checkRoleAsso } from '../middlewares/checkRole.js';
const router = express.Router();
const missionsController = new MissionsController()

router.route('/missions')
    .post(checkRoleAsso, (req, res, next) => missionsController.createMission(req, res, next))
    .get((req, res, next) => missionsController.getMissions(req, res, next))

router.get('/missions/:idMission/candidatures', checkRoleAsso,
    (req, res, next) => missionsController.getCandidaturesByMission(req, res, next))

router.route('/missions/:idMission')
    .get((req, res, next) => missionsController.getMission(req, res, next))
    .put(checkRoleAsso, (req, res, next) => missionsController.updateMission(req, res, next))
    .delete(checkRoleAsso, (req, res, next) => missionsController.deleteMission(req, res, next))

export default router;

