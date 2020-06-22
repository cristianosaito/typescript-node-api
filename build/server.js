"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
app_1.default.app.listen(5000, function () {
    console.log("server listening on port 5000");
});
process.once('SIGUSR2', function () { return app_1.default.closeDataBaseConnection('nodemon restart', function () { return process.kill(process.pid, 'SIGUSR2'); }); });
process.once('SIGINT', function () { return app_1.default.closeDataBaseConnection('execução interrompida', function () { return process.exit(0); }); });
