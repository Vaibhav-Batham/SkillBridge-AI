 import mongoose from "mongoose";

 async function DB() {
     try {
        await mongoose.connect(process.env.MONGO_URI)

    console.log("DB Connected")
     }

     catch (error){
        console.log(error);
     }
     
    
 }


 export default DB;