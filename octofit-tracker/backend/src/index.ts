import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const mongoUri =
  process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit-tracker'

app.use(express.json())

app.get('/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-backend' })
})

async function startServer() {
  try {
    await mongoose.connect(mongoUri)
    console.log(
      `Connected to MongoDB at ${mongoose.connection.host}:${mongoose.connection.port}`,
    )
  } catch (error) {
    console.error('MongoDB connection failed:', error)
  }

  app.listen(port, () => {
    console.log(`OctoFit backend listening on port ${port}`)
  })
}

void startServer()