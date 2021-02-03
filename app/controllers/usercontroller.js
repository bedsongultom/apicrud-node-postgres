const env = require('../config/dbaseconfig.js')



const getUsers = (request, response) => {
  env.query('SELECT * FROM tblmstuser ORDER BY userid ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}


const getUserById = (request, response) => {
  const userid = parseInt(request.params.userid)

  env.query('SELECT * FROM tblmstuser WHERE userid = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createUser = (request, response) => {
  const userid = parseInt(request.params.userid)
  const { cardid,
  firstname,
  lastname,
  fullname,
  username,
  password,
  userlevelid,
  jobid,
  deptid,
  status  } = request.body

  env.query('INSERT INTO tblmstuser (cardid, firstname,lastname,fullname,username,password, userlevelid,jobid,deptid,status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)', 
    [cardid, firstname, lastname, fullname, username, password, userlevelid, jobid, deptid, status ], (error, results) => {
    if (error) {
      throw error
    }
    
    response.status(201).send('userID: ${userid} has created')


  })
}



const updateUser = (request, response) => {
  const userid = parseInt(request.params.userid)
  const { fullname, username } = request.body

  env.query(
    'UPDATE tblmstuser SET fullname = $1, username = $2 WHERE userid = $3', [fullname, username, userid], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send('userid ${userid} has updated ')
    }
  )
}



const deleteUser = (request, response) => {
  const userid = parseInt(request.params.userid)

  env.query('DELETE FROM tblmstuser WHERE userid = $1', [userid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(' userID ${userid} has deleted')
  })
}





module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}


