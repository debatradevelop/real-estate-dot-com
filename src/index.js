import express from 'express'
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }))

app.get('/api/test', (req,res) => {
  res.json({ message: "Welcome to test route" })
})

app.listen(3000, () => {
  console.log('WebServer is up and running...')
})