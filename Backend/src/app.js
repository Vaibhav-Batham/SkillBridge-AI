 import express from "express"
 import authRouter from "./routes/auth.routes.js";

 const app = express()

 app.use(express.json())

 // using all the routes
 app.use("/api/auth",authRouter)


 export  default app;

 


 // iske basically do kaam hote hai first servrer ko instance dena and apis and routes ko use krna