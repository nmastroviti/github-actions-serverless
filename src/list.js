import express from 'express'

const app = express()

app.get('/users', (req, res) => {
  res.json([
    { name: 'John Doe', email: 'johndoe@domain.com' },
    { name: 'Jane Doe', email: 'janedoe@domain.com' },
  ])
})

export { app }
