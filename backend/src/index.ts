import express from "express";
import router from "./routes/index";
const app = express();
const PORT = 4000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/v2", router);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
