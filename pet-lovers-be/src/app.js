// import express from "express";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import prisma from "./prisma.js";

const express = require("express");
const cors = require("cors");
const path = require("path");
const { fileURLToPath, meta } = require("url");
const prisma = require("./prisma.js");

// const filename = fileURLToPath(import.meta.url);

// const dirname = path.dirname(filename);
const app = express();
// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `);
// });
app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use("/site", express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});
app.use(
  cors({
    origin: ["http://localhost:3000", "https://pet-lovers-fe.vercel.app"],
    // origin: "http://localhost:3000",
    // origin: "https://pet-lovers-fe.vercel.app",
  })
);

app.get("/petAdopters", async (req, res) => {
  console.log(req);
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

// export { app };
module.exports = app;
