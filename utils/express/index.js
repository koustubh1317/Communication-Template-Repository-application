const cors = require('cors')
module.exports = (app, express) => {
    app.use(express.json({ extended: false }))
    app.use(cors())
    app.use(express.urlencoded({ extended: true }))
}