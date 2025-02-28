import express from 'express';
import CandidaturesController from '../controllers/candidatures.controller.js';
import { checkRoleAsso, checkRoleBene } from '../middlewares/checkRole.js';
const router = express.Router();
const candidaturesController = new CandidaturesController()


router.post('/candidatures',
    checkRoleBene,
    (req, res, next) => candidaturesController.createCandidature(req, res, next))

router.get('/candidatures/benevole',
    checkRoleBene,
    (req, res, next) => candidaturesController.getCandidaturesByUser(req, res, next))

router.put('/candidatures/:idCandidature',
    checkRoleAsso,
    (req, res, next) => candidaturesController.updateCandidature(req, res, next))

export default router;