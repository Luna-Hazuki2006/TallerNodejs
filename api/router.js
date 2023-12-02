var pgp = require("pg-promise")(/*options*/);
var db = pgp("postgres://gracoapi_user:ZnCbDQBUclZstkJ9fxcpnN1T3NjqWsHm@dpg-cjrq5m5m702s73eo0pmg-a.oregon-postgres.render.com/gracoapi?ssl=true");

db.manyOrNone("SELECT * from pokemons ", 'informacion')
.then(function (data) {
        console.log("DATA:", data);
})
.catch(function (error) {
        console.log("ERROR:", error);
});