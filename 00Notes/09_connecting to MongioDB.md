# 9

# Connecting to DB (mongoDB)

- mongoose is an application layer on top of DB, which is used to connect to MongoDB.

#### Set Up

- add mongo db url to `.env`
- create a new file in the DB folder - dbConnection.js
- since it is a DB call- so always remember to use `try-catch` and `async await`.

  ```js
  import mongoose from "mongoose";

  const connectToDB = async () => {
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("MongoDB connected ✅ ");
    } catch (error) {
      console.error("MongoDB connection error ❌ ", error);
      process.exit;
    }
  };

  export default connectToDB;
  ```

#### Modifying index.js

- So, in our `index.js` we want to listen on the port only when we are connected to a DB.
- So, we will modify that section.

  ```js
  import connectToDB from "./db/dbConnections.js";

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
  ```

  - Since `connectToDB` is an `async` function, it returns a `promise`.
  - we will only listen to the port if MongoDB is connected successfully by using `.then()`
  - if MongoDB connection is unsuccessful, then we will use `.catch()` to catch any errors.
