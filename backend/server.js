import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import notesRoutes from "./Routes/notesroutes.js";
import connectDB from "./config/db.js";
import rate_limiter from "./middlewares/rate_Limiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// FIX __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV !== "production") {
  app.use(cors({ origin: "http://localhost:5173" }));
}

app.use(express.json());
app.use(rate_limiter);
app.use("/api/notes", notesRoutes);

// ✅ EXPRESS 5 SAFE FRONTEND SERVE
if (process.env.NODE_ENV === "production") {
  app.use(
    express.static(path.join(__dirname, "../frontend/dist"))
  );

  app.get(/^(?!\/api).*/, (req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend/dist/index.html")
    );
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server running on port", PORT);
  });
});
