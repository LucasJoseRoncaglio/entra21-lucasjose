require("dotenv").config();
const {Sequelize} = require("sequelize");

const dbconfig = require("../config/database");

const sequelize = new Sequelize(dbconfig);

module.exports = sequelize;


/*
(async () => {
    try {
        await sequelize.authenticate();
    } catch(error) {
        console.error("conexao falhou", error);
    }
})();    */
