# 8

# Setting up Mongo Atlas

- Create a cluster (follow the prompts).
- Select `Compass` from the pop up window.
- Copy the mongoDB url.
- In our `.env`, go to `MONGO_URI` and at the end of the url type in the name of the DB that we want to create.
- Go to Cluster and click to Browse Collections to view all the databases that we have created.
- Set up the DB Username and Password.
  - Go to Network Access section and add IP address.
  - This IP is allowed to communicate with the Database.
  - For development purposes we will use the ip `0.0.0.0/0`.
  - This ip address can be accessed by anyone, so during deployement we have to change this IP address.
- Now create a DB user
  - enter the username and password.
  - `Dont` use special characters.
  - In the `Built-in-Role` section, select `Read and Write to any Database`.
  - CLick on `Add User`
- Go to `.env` and in the `MONGO_URI`, type in the username and password.
