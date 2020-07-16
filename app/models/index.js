const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Nome das tabelas 
db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model.js")(sequelize, Sequelize);
db.pacientes = require("./paciente.model.js")(sequelize, Sequelize); 
db.responsavels = require("./responsavel.model.js")(sequelize, Sequelize); 


db.pacientes.hasMany(db.responsavels, { as: "responsavels" })


module.exports = db;