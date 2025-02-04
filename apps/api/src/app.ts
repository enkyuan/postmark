import cors from "cors";
import express, { Express, Request, Response } from "express";
import morgan from "morgan";
import dotenv from "dotenv";

import type { GetStatusResponse } from "@monorepo/types";
import { fromNodeHeaders, toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use(morgan("tiny"));
app.use(express.json({ limit: "100mb" }));

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.get("/", (_, res) => {
  res.send("Hello from Express!");
});

app.get("/api/me", async (req, res) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers),
  });
  return res.json(session);
});

app.get("/status/db", (_, res) => {});

app.get("/status/auth", (_, res) => {});

app.get("/status/api", (_, res) => {
  const testJson: GetStatusResponse = {
    message: `Running on port ${port}`,
  };
  res.json(testJson);
});

app.get("/status/client", (_, res) => {});

export default app;
