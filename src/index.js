import dotenv from "dotenv";
import app from "./app.js";
import connectToDB from "./db/dbConnections.js";

dotenv.config();

const port = process.env.PORT;

connectToDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Our app listening on port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error", err);
    process.exit(1);
  });
