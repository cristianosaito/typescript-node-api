"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var db_1 = require("./config/db");
var App = /** @class */ (function () {
    function App() {
        this.app = express();
        this.middleware();
        this.routes();
        this.dataBase = new db_1.default();
        this.dataBaseConnection();
    }
    App.prototype.dataBaseConnection = function () {
        this.dataBase.createConnection();
    };
    App.prototype.closeDataBaseConnection = function (message, callback) {
        this.dataBase.closeConnection(message, function () { return callback(); });
    };
    App.prototype.middleware = function () {
        this.app.use(morgan('dev'));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    };
    App.prototype.routes = function () {
        this.app.route('/').get(function (req, res) {
            return res.status(200).json({ 'message': 'Hello,world' });
        });
    };
    return App;
}());
exports.default = new App();
