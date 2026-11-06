const express = require("express")
const mysql =  require ("mysql2/promise")
const app = express()

app.use(express.json())

// conectar com o banco de dados
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "escola"
})

//  -------- rotas do professor ---------


app.listen(3000, () => console.log("API no ar"))