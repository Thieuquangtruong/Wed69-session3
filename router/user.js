const router = require('express').Router()
// const router = express.Router()   
const {createUser, getUser, deleteUser} = require('../controller/user')

router.get('/', getUser)

router.post('/', createUser)

router.delete('/:id', deleteUser)
module.exports = router