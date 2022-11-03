const chalk = require('chalk')
require('dotenv').config()
require('./db/conn')
const app = require('./app')
const PORT = process.env.PORT




app.listen(PORT, () => {
    console.log(chalk.blue.bold(`The server is running at  http://localhost:${PORT}`))
})