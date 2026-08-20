import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "Aiden Backend работает"
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Aiden Backend запущен на порту ${PORT}`);
});
