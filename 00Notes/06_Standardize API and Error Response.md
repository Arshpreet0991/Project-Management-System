# 6

# Standardize API and Error Response

- When a client sends a request to a server, there are two outcomes.
  - response
  - error
- In productiom, we have to set a standard approach to handle these responses and errors.
- This way, all the devs working on the project will use the same protocols to handle responses and errors.
- `Example Response:` status code, data, message.
- `Example Error:` error code, data, message.
  - There is an `Error` class available in `Node.js`. We can take this existing class, and overwrite it with our own custom errors.

#### Standard API Response

- we create a `api-response.js` file in the `utils` folder.
  ```js
  class ApiResponse {
    constructor(statusCode, data, message = "Success") {
      this.statusCode = statusCode;
      this.data = data;
      this.message = message;
      this.success = statusCode < 400;
    }
  }
  export { ApiResponse };
  ```

#### Standard Errors

- we create an `api-error.js` file in `utils` forlder.

  ```js
  class ApiError extends Error {
    constructor(
      statusCode,
      message = "Something went wrong",
      errors = [],
      stack = "",
    ) {
      super(message);
      this.statusCode = statusCode;
      this.data = null;
      this.message = message;
      this.success = false;
      this.errors = errors;

      if (stack) {
        this.stack = stack;
      } else {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }

  export { ApiError };
  ```
