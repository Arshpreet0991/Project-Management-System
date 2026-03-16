# 10

# Create Health Check Route

- this is route to check the health of the system.
- this is used to monitor the system health.
  - we simply send a get request to the server and recieve a successful response.

#### Basic flow of the APP

# Express Architecture

#### Express App Flow

<p align="center">

Client → app.js → Routes → Controllers → Response

</p>

#### Step 1: HealthCheck Controller

```js
import { ApiResponse } from "../utils/api-response.js";

const healthCheck = (req, res) => {
  try {
    res
      .status(200)
      .json(new ApiResponse(200, { message: "Server is Running..." }));
  } catch (error) {
    console.error(error);
  }
};

export { healthCheck };
```

#### Step 2: inside `healthCheck.routes.js`

```js
import { Router } from "express";
import { healthCheck } from "../controllers/healthcheck.controllers.js";

const router = Router();

router.route("/").get(healthCheck);

export default router;
```

#### Step 3: inside `app.js`

```js
// health check route
import healthCheckRouter from "./routes/healthCheck.routes.js";
app.use("/api/v1/healthcheck", healthCheckRouter);
```

- By doing this, we only have to define our url once in `app.js`, like `"api/v1/healthcheck"`
- then we can simply add routes and the corresponding methods to create different urls.

**We are basically going from `app.js` to `router` then to `controller`**
