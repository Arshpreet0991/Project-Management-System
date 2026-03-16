# 2

## Setting up the Project

### Steps:

#### Step 1: In the terminal:

- `npm init`: follow the prompts.

#### Step 2:

- create `index.js` in root folder.

#### Step 3: Edit package.json

- Go to `package.json`:

  ```js

    "type":"module",
        "scripts": {
        "dev": "node index.js"
    },
  ```

  - First, we will add `"type":"module"`. This will enable the import statements syntax in our codebase.
  - Edit the script section: this will run our `index file` when we type `npm run dev` in the terminal.

#### Step 4: Add Prettier to the project

- We want to standardize the style of the codebase.
- So each dev on the team writes the code in same style.
- we will define the tab spaces, semi- colon uses etc.

1.  In terminal: `npm install --save-dev --save-exact prettier`

2.  Create a file in root folder called `.prettierrc`. This is our configuration file for prettier.

- Sample configuration.

  ```json
  {
    "tabWidth": 2,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "arrowParens": "always"
  }
  ```

3.  For some files, we do not want the prettier to format them. So we create another file in root folder called `.prettierignore` - Just type:

    ```</>
    node_modules
    .env
    ```

#### Step 5: Add Git to our Project

- create a file in the root called `.gitignore`.
- add `node_modules` and `.env` to it, just like prettier.
- In the github account create a new repo and copy and paste the commands one by one in the terminal.

#### Step 6: Set up Auto-Restart for server

- To smooth the development process, we want that anytime there is a change in my files and i save it, the server should automatically restart and reflect the changes.
- we have a few options for this
  - nodemon
  - watch (supported by node directly)

- We will use `nodemon` here.
- In terminal type: `npm install --save-dev nodemon`
- Now, we have to make changes to the script section again, in `package.json`.

  ```json
    "scripts": {
      "dev": "nodemon src/index.js",
      "start": "node src/index.js"
    },
  ```

#### Step 7: Set up the .env (Environment Variables) file

- In `.env`, we keep sensitive configuration values that should not be exposed to the client.

- The `.env` file exists only on the backend/server environment and is read by the Node.js application using environment variables.

- This file is not sent in client responses and is usually added to `.gitignore` to prevent it from being pushed to version control.

`Examples`: database passwords, database URLs, API keys, JWT secrets, etc.

1.  Create a `.env` file in the root folder.
2.  Install the `dotenv` package. This package allows our Node.js application to load variables from the `.env` file into the Node environment.
    - After loading them with `dotenv.config()`, we can access the variables through the Node process object using `process.env`.

    - In terminal: `npm install dotenv`

3.  Inside the entry point in the app, in our case, `index.js`, on the top, we will import the dot env package.

    ```js
    import dotenv from "dotenv";

    dotenv.config({
      path: "./.env",
    });
    ```

#### Step 8: Project Folder

# Project Folder Structure

- `public/` – Static assets like images, CSS, JavaScript files.
- `src/` – Main source code folder.
  - `controllers/` – Contains the logic for handling requests and responses.
  - `db/` – Database connection and related functionality.
  - `middlewares/` – Functions that run between request and response (e.g., authentication, logging).
  - `models/` – Database schemas or data models.
  - `routes/` – Defines API endpoints and routing logic.
  - `utils/` – Helper functions and reusable utilities.
  - `validators/` – Functions for validating input data.

Move the index.js to src folder and make sure in scripts to edit `"dev":"nodemon src/index.js"`

add a file called `.gitkeep` inside every folder.
