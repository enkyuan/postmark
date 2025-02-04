import * as http from "node:http";
import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const port = Number(process.env.PORT);

const init = async (): Promise<void> => {
  const server = http.createServer(app);

  server.listen(port, "::", () => {
    console.log(`API http server running on port ${port}`);
  });
};

init();
