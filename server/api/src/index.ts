import { Hono } from "hono";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";

import auth from "../../lib/auth";
 
const app = new Hono();
 
app.get('/api/auth/*', (c) => auth.handler(c.req.raw));
app.post('/api/auth/*', (c) => auth.handler(c.req.raw));
 
serve(app);
