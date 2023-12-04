const { Sequelize } = require('sequelize');

const database = "gracoapi";
const username = "gracoapi_user";
const password = "ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm";
const host = "dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com";

const sequelize = new Sequelize('postgres://gracoapi_user:ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm@dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com/gracoapi?ssl=true');

module.exports = {
  sequelize
}