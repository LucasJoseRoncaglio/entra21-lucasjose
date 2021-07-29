const aulaNODE = require("os");

console.log(aulaNODE.cpus());

console.log(aulaNODE.freemem() / 1024 / 1024);

console.log(aulaNODE.totalmem() / 1024 / 1024);

console.log(aulaNODE.platform())

console.log(aulaNODE.uptime() / 60 / 60)

console.log(aulaNODE.EOL);

