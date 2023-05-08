// import express from "express";
// import cors from "cors";
// import path from "path";
// import { fileURLToPath } from "url";
// import prisma from "./prisma.mjs";

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);
// const app = express();
// const PORT = process.env.PORT || 8000;

// app.listen(PORT, () => {
//   console.log(`API listening on PORT ${PORT} `);
// });
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "..", "public")));
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "https://pet-lovers-fe.vercel.app"],
//     // origin: "http://localhost:3000",
//     // origin: "https://pet-lovers-fe.vercel.app",
//   })
// );

// app.get("/", async (req, res) => {
//   // const petAdopters = await prisma.petAdopter.findMany({});
//   // res.json(petAdopters);
//   res.send("This is my about route..... ");
// });

// app.post("/petAdopters", async (req, res) => {
//   const { email, username, pet } = req.body;
//   const post = await prisma.petAdopter.create({
//     data: {
//       email,
//       username,
//       pet,
//     },
//   });
//   res.json(post);
// });

// // export { app };

// module.exports = app;

const express = require("express");
const app = express();

// Define your routes and middleware here

// Example route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

module.exports = app;
