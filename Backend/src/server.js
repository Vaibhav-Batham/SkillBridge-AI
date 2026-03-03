import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";  // .js extension zaroori hai
import DB from "./config/db.js"


  DB();

app.listen(3000, () => {
  console.log("server is running on port 3000");
 // console.log("ENV:", process.env.MONGO_URI);
});