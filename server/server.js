import http from "http";
import app from "./app.js";
import mongoConnect from "./db/mongo.js";

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

async function startServer() {
  await mongoConnect();
  server.listen(PORT, async () => {
    console.log(`Server is listening on port ${PORT}...`);
  });
}

startServer();