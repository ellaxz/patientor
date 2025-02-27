import express from "express"
import diagnosesRouter from "./routes/diagnoses"
import patientsRouter from "./routes/patients"
import cors from "cors"

const app = express()
app.use(express.json())
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors())

const PORT = 3001

app.get("/ping", (_req, res) => {
  console.log("someone pinged here")
  res.send("pong")
})

app.use("/api/diagnoses", diagnosesRouter)
app.use("/api/patients", patientsRouter)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
})
