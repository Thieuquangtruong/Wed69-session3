const router = require('express').Router()
// const router = express.Router()   
const {createUser, getUser, deleteUser, login} = require('../controller/user')
const authentication = require('../middleware/authentication')

router.post('/login', login)

router.get('/', authentication, getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)
module.exports = router