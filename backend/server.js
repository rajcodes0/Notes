import express from "express";
import dotenv from "dotenv";
import cors from "cors"

import notesRoutes from "./Routes/notesroutes.js";
import connectDB from "./config/db.js";
import rate_limiter from "./middlewares/rate_Limiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;



app.use(cors({
  origin:"http://localhost:5173",
}))
app.use(express.json()); 
app.use(rate_limiter);
app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
app.listen(PORT, () => {
  console.log("server is running on port,", PORT);
})
});
