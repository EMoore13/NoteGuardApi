# NoteGuardApi
A simple bookmark and project management tool

1. Install [Nodejs](https://nodejs.org/en/).
2. Clone or download this repository and navigate to the project directory -> *the location of the main.js file*.
3. Open a terminal and use the command `npm install`.
4. Start a development server by using the command `npm start`.
  - The default port is `localhost:5000/`, this can be changed in the main.js file.
  
# Routes
The basic routes as of 2/11/2020 are as follows:

 - `Get:    /api`       => This fetches all *bookmark* documents within the database
 - `Post:   /api`       => Creates a new bookmark. *Requires `{ tabName, url }`*
 - `Get:    /api/:id`   => This fetches a single bookmark by its ObjectId value
 - `Patch:  /api/:id`   => Update any of the values `{ tabName, url, category }`
 - `Delete: /api/:id`   => Deletes a bookmark by its ObjectId value
