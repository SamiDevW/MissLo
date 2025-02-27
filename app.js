import express from 'express'
import 'dotenv/config'
import usersRoute from './routes/usersRoute.js'
const app = express()
const PORT = process.env.PORT

app.use(express.json())
app.use('', usersRoute)
app.listen(PORT, () => {
    console.info(`Listenning on http://localhost:${PORT}`)
})