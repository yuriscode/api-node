const sqlite3 = require('sqlite3')
const sqlite = require('sqlite')
const path = require('path')

async function sqliteConnection(){
    const database = await sqlite.open({
        filename: path.resolve(__dirname, '..', 'database.db'), //create file database.db
        driver: sqlite3.Database // connection with db
    })

    return database
}

module.exports = sqliteConnection