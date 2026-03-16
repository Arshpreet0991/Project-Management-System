import express from "express";
import cors from "cors";

const app = express();

// basic express config using middleware
app.use(express.json({ limit: "16kb" })); // support json data in the app
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public")); // to make the public folder publicly viewable.

// config cors
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
    allowedHeaders: ["Authorization", "Content-Type"],
  }),
); // we want to tell this where our front end lies.

app.get("/", (req, res) => {
  res.send("Welcome to Project Management App");
});

// health check route
import healthCheckRouter from "./routes/healthCheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);
export default app;
