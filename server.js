const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./app/controllers/usercontroller.js')
const router = require('./app/routers/router.js')
const port = 3000


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)




app.get('/', (request, response) => {
  response.json({ info: 'Welcome to API with Node.js, PostgreSQL and Express' })
})


app.use('/', router)


app.listen(port, () => {
  console.log('App listening at port: http://localhost:',port)
})
