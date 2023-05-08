import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import prisma from "./prisma.mjs";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://pet-lovers-fe.vercel.app"],
  })
);

app.get("/petAdopters", async (req, res) => {
  const petAdopters = await prisma.petAdopter.findMany({});
  res.json(petAdopters);
});

app.post("/petAdopters", async (req, res) => {
  const { email, username, pet } = req.body;
  const post = await prisma.petAdopter.create({
    data: {
      email,
      username,
      pet,
    },
  });
  res.json(post);
});

export { app };
