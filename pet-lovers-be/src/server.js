import http from "http";
import { app } from "./app.mjs";

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  server.listen(PORT, () => {
    console.log("LISTENING ON", PORT);
  });
}

startServer();

export default server;
