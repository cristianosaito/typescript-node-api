import * as express from "express"
import * as morgan from "morgan"
import * as bodyParser from "body-parser"
import DataBase from "./config/db"

class App{
    public app: express.Application
    private dataBase: DataBase

    constructor(){
        this.app = express()
        this.middleware()
        this.routes()
        this.dataBase = new DataBase()
        this.dataBaseConnection()
    }

    dataBaseConnection(){
        this.dataBase.createConnection()
    }

    closeDataBaseConnection(message, callback){
        this.dataBase.closeConnection(message, ()=> callback())
    }

    middleware(){
        this.app.use(morgan('dev'))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))

    }

    routes(){
        this.app.route('/').get((req,res)=>{
            return res.status(200).json({'message':'Hello,world'})
        })
    }
}

export default new App()