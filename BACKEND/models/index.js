const  dbConfig = require('../config/dbConfig.js');
const {Sequelize , DataTypes} = require('sequelize');

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
        host:dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases : false,
        pool:
        {

            max :dbConfig.pool.max,
            min :dbConfig.pool.min,
            acquire:dbConfig.pool.acquire,
            idle:dbConfig.pool.idle,

        }
    }
)
sequelize.authenticate()
.then(()=>{
    console.log("Connected")
})
.catch(err => console.log(err))

const db={}
db.Sequelize  = Sequelize
db.sequelize = sequelize
db.donation_info= require('./donationsModel.js')(sequelize, DataTypes)
db.donor_info = require('./donorsModel.js')(sequelize, DataTypes)
db.event= require('./eventsModel.js')(sequelize, DataTypes)
db.volunteer_info= require('./volunteersModel.js')(sequelize, DataTypes)

// associations

db.sequelize.sync({force : false})
.then(()=>{
    const VLR_001="VLR_001"
    sequelize.query(`SELECT Volunteer_ID , Volunteer_Name FROM VOLUNTEER_INFOS`).then((d)=>{
        console.log(d);
    })
    
    console.log('yes re-sync done!')
})

module.exports = db