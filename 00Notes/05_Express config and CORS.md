# 5

# CORS – Cross-Origin Resource Sharing

The problem it solves:

- By default, browsers won't let your JavaScript talk to a different address than the one it came from. This is a built-in safety rule called the Same-Origin Policy.
- Example: Say your frontend is running at localhost:3000 and your backend is at localhost:5000. Even though both are on your own computer, the browser sees them as different — and blocks the request. Different port, different origin.

#### How CORS fixes it:

- Your server basically sends a note back to the browser saying "hey, I know this guy, let him in." It does this through a special header in the response.
- Simple as that — the browser asks, the server approves, the request goes through.
- CORS is handled at the backend, although it is a browser feature.
- `CORS` is used in middleware, so we use `app.use`. So, inside our `app.js`, we add this code:

  ```js
  app.use(
    cors({
      origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
      credentials: true,
      methods: ["GET", "POST", "PATCH", "DELETE", "PUT", "OPTIONS"],
      allowedHeaders: ["Authorization", "Content-Type"],
    }),
  ); // we want to tell this where our front end lies.
  ```

  - In `.env` we mention the address of our Front end.
  - `credentials`: This tells the browser that the server allows cookies/auth headers/ sesssion etc across origins.
    - Without this the cookies wont be sent, login sessions will breakm JWT in cookies fails.
  - `methods`: front end is allowed to use these requests type.
  - `allowedHeaders` : specifies which request headers the front end is allowed to send.

#### Express Configs.

- we also need to configure our express, so in our `app.js`, we will add the following code to insert express configurations in our project.
- Express is configured using middleware `app.use`

```js
// basic express config using middleware

// support json data in the app
app.use(express.json({ limit: "16kb" }));

// ability to read data from url
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to make the public folder publicly viewable.
app.use(express.static("public"));
```
