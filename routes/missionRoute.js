import express from 'express';
const router = express.Router();


router.post('/mission', async (req, res) => {

    res.send('mission')
})
router.post('/login', async (req, res) => {
    res.send('login')
})
export default router;