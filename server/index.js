
const express= require('express')
const app= express()
const connectionDb=require("./db")
const cors= require('cors')
const bodyParser=require('body-parser')
const employeeRoutes=require("./controllers/employee.controller")
const {errorHandler} =require('./middlewares')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(errorHandler)
app.use(cors({origin:'http://localhost:4200'}))
app.use('/api/employees',employeeRoutes)

connectionDb()
           .then(()=>{
            console.log('db connection  success');
            app.listen(3000,()=>
            console.log('server start at 3000'))
           })
           .catch(err=> console.log(err))