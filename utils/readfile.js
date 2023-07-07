const fs = require('fs') // thư viện đọc file

const readfile = (url) => {
    const data = fs.readFileSync(url)
    const result = JSON.parse(data)

    return result
}

module.exports = readfile