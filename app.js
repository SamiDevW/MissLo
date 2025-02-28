import express from 'express'
import 'dotenv/config'
import usersRoute from './routes/usersRoute.js'
import missionsRoute from './routes/missionsRoute.js'
import candidaturesRoute from './routes/candidaturesRoute.js'
import cookieParser from 'cookie-parser'
import jwtCheck from './middlewares/jwtCheck.js'
import ExpressError from './utils/ExpressError.js'
import DatabaseError from './repository/dbErrors/errorHandler.js'
const app = express()
const PORT = process.env.PORT
app.use(cookieParser())
app.use(express.json())


app.use('', usersRoute)
app.use(jwtCheck)
app.use('', missionsRoute)
app.use('', candidaturesRoute)
app.all('*', (req, res, next) => next(new ExpressError(404, 'Page not found')))
app.use((err, req, res, next) => {
    if (!err.statusCode) return res.status(500).json({ message: 'Erreur innatendu' })
    res.status(err.statusCode).json({ message: err.message })
})
app.listen(PORT, () => {
    console.info(`Listenning on http://localhost:${PORT}`)
})