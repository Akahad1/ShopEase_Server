import express, { Application, Request, Response } from "express";
import cors from "cors";
import router from "./app/router/router";

const app: Application = express();

app.use(express.json());
app.use(
  cors()
  // { origin: ["https://green-leaf-theta.vercel.app"], credentials: true }
);

// Basic test route
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
// Main API routes
app.use("/api", router);
export default app;
