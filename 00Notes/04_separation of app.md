# 4

# Separation of App and Index file

- `index.js` is the main entry point of the app.
- As a best practice, we keep it as clean as possible.

- Create a file `app.js` in `src/` to define the Express app object and routes.
- Export the app from `app.js` and import it in `index.js`.

- `index.js` is our main entry point into the app.

```js
import express from "express";

const app = express(); // create the object of express server.

app.get("/", (req, res) => {
  res.send("Welcome to Project Management App");
});

export default app;
```

And our `index.js` looks like this:

```js
import dotenv from "dotenv";
import app from "./app.js";
dotenv.config(); // if .env is in root, then we dont need to provide path

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Our app listening on port http://localhost:${port}`);
});
```
