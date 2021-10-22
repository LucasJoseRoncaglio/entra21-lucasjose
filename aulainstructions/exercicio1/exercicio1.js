const db = require("./db");
const format = require("pg-format");


(async () => {
    try {
        const res = await db.query("SELECT NOW()");
        console.log(res.rows[0].now);
    } catch (error) {
        console.log(error.message);
    } finally {
        db.end();
    }
})();