import type { GetTestResponse } from "@monorepo/types";
import cors from "cors";
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";

dotenv.config();

const app: express.Express = express();
const port = process.env.PORT;

app.use(morgan("tiny"));
app.use(express.json({ limit: "100mb" }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);

app.get("/", (_, res) => {
  res.send("Hello from Express!");
});

app.get("/test", (_, res) => {
  const testJson: GetTestResponse = {
    message: `Server is running on port ${port}`,
  };
  res.json(testJson);
});

app.get("/error", (_, res) => {
  res.status(500).send("Internal server error");
});

export default app;
