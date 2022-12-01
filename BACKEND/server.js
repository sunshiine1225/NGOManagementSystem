const express =  require('express')
const cors = require ("cors")
const app = express()

const donorRouter = require('./routes/donorRouter.js')
const eventRouter = require('./routes/eventRouter.js')
const volunteerRouter = require('./routes/volunteerRouter.js')
const donationRouter = require('./routes/donationRouter.js')


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended:true }))
app.use('/api/donors',donorRouter)
//app.use('/api/volunteers',volunteerRouter)
app.use('/api/donations',donationRouter)
app.use('/api/events',eventRouter)

app.get("/", (req, res) => {
    res.json({ message:"helllo from api"})
})

const PORT =process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
