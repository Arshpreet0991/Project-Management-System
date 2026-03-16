# 3

# Set up a basic Express Server

1.  In terminal write: `npm install express`.
2.  Copy the sample code from `express.js` website and paste it in our `index.js`.
    - Instead of using require, we will use the import syntax.

```js
import express from "express";

// set up express server - this goes below dotenv section
const app = express(); // get an object of the server.
const port = process.env.PORT || 3001; // get port no. from our .env

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Our app listening on port http://localhost:${port}`);
});
```

- `app.get ("route_name", callback)` :
  - This is a sample home page route using get method.
  - This method takes `"/"` (home page) as route name, and takes a callback. This callback method takes in request and response `(req,res)` object and sends a response from server using `res.send` method.

  - We have more ways to send our response, like `res.cookies()`, `res.locations()` etc. Which we will use according to our need.

- `app.listen(port, callback):` This starts the server and keeps it running, listening for incoming requests on the specified port.

#### Very basics of http methods

- GET → read
- POST → create
- PUT → update (replace)
- DELETE → remove

- So, in our express server, we will be using these methods like
  ```js
  app.get("/route", (req, res) => {
    /* handle GET request */
  });
  app.post("/route", (req, res) => {
    /* handle POST request */
  });
  app.put("/route", (req, res) => {
    /* handle PUT request */
  });
  app.delete("/route", (req, res) => {
    /* handle DELETE request */
  });
  ```
