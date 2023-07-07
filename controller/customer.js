const fs = require('fs') // thư viện đọc file
const readFile = require('../utils/readfile')

const getCustomer = (req, res) => {
    const result = readFile('customer.json')

    return res.status(200).json({result})
}

const createCustomer =  (req, res) => {
    const userId = req.body.userId
    const username = req.body.username

    const result = readFile('customer.json')

    const newResult = [...result, {userId,username}]
    const writeToFile = fs.writeFileSync('customer.json',JSON.stringify(newResult))

    return res.status(200).json({
        message:"create userid & customer username successfully"
    })
    

}

const deleteCustomer = (req, res) => {
    const deleteCustomer = req.params.id

    const result = readFile('customer.json')

    const newResult = result.filter(item => item.userId != deleteCustomer)
    
    const writeToFile = fs.writeFileSync('customer.json',JSON.stringify(newResult))

    return res.status(200).json({
        message:"Delete customer user successfully"
    })
 
}

module.exports = {
    getCustomer,
    createCustomer,
    deleteCustomer
}