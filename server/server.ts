import App from "./app"

App.app.listen(5000, ()=>{
    console.log("server listening on port 5000");  
})

process.once('SIGUSR2',() => App.closeDataBaseConnection('nodemon restart',() => process.kill(process.pid,'SIGUSR2')))
process.once('SIGINT',() => App.closeDataBaseConnection('execução interrompida',() => process.exit(0)))