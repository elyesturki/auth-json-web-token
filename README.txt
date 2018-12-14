git clone https://github.com/elyesturki/auth-json-web-token.git
npm install

// install json server https://github.com/typicode/json-server
*Install JSON Server

npm install -g json-server

*Create a db.json file with some data

{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

*Start JSON Server

json-server --watch db.json

*Now if you go to http://localhost:3000/posts/1, you'll get

{ "id": 1, "title": "json-server", "author": "typicode" }

////////////////////////////////////////
--> Faire fonctionner le serveur json
npm install -g json-server
create server.js

    1- go to your server.js directory and run : npm init -y
    2- npm install json-server --save-dev

    1- go to your server.js directory and run : npm link json-server
    2- run node server.js

cmd
//   > node server.js
//OR > json-server --watch db.json

//////////////////
npm i jsonwebtoken --save
npm i body-parser --save

///sous ./backend/
node server.js

http://localhost:3000/auth/login
