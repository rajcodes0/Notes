import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import path from "path"

import notesRoutes from "./Routes/notesroutes.js";
import connectDB from "./config/db.js";
import rate_limiter from "./middlewares/rate_Limiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const _dirname = path.resolve()

if(process.env.NODE_ENV !== "production"){
app.use(cors({
  origin:"http://localhost:5173",
}))
}


app.use(express.json()); 
app.use(rate_limiter);
app.use("/api/notes", notesRoutes);

if(process.env.NODE_ENV === "production"){
  app.use(express.static(path.join(_dirname,"../frontend/dist")))


app.get("*",(req,res) =>{
  res.sendFile(path.join(_dirname,"../frontend","dist","index.html"))
})
}



connectDB().then(() =>{
app.listen(PORT, () => {
  console.log("server is running on port,", PORT);
})
});
