const mongoose = require('mongoose')

let conn = null

const URI = 'mongodb+srv://secret:W8WqGEkDZOZonkcw@cluster0.jfd5t.mongodb.net/secret?retryWrites=true&w=majority'

module.exports = async () => {
    if (!conn) {
        conn = mongoose.connect(URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        await conn
    }
}