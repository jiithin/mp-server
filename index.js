const JSONServer = require ('json-server') //importing  the json server module use required becoz es5

const MPServer = JSONServer.create() //creating an instance of the server
const router = JSONServer.router('db.json') // to store  all our routes and data in a file called db.json
const middleware = JSONServer.defaults() // to convert all the stored js data  into a proper json

const PORT = 3000 ||process.env.PORT //create  a variable that will hold the port number
//if no port is provided it will use 3000, if 3000 isnt avilable it will choose another port as we set.

MPServer.use(middleware) // Middleware for handling requests and responses
MPServer.use(router) // Router to handle the endpoints


// used to show the server started running in terminal
MPServer.listen(PORT,()=>{
    console.log((`media-player server started at PORT ${PORT}, and waiting for the client request...`))
})