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

    "type":"module"
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

1.  `In terminal:`npm install --save-dev --save-exact prettier`

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

    ```js
    node_modules;
    .env;
    ```

#### Step 5: Add Git to our Project

- create a file in the root called `.gitignore`.
- add `node_modules` and `.env` to it, just like prettier.
- In terminal type:
  - `git init` : initialize the repo
  - `git status`: check which files will be added. Note that `.env` and `node_modules` are not uploaded to git because of `.gitignore`.
