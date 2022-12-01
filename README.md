# skyed-messager

# Packages

client - react.js frontend
server - node.js backend
common - code shared between client and server

# How it works

Front-End: React.js
Back-End: Node.js / Express.js / Socket.io
Database: PostgreSQL and Redis

# Installation

Clone the repository
CD into the repository and run yarn or npm install
Make sure redis is installed and the redis-cli functions properly
Redis server must be running
Create a postgres database and a table called users, as defined in ./packages/server/database.sql

Create a file named .env in ./packages/server and make sure it has the following variables defined:
DATABASE_NAME=
DATABASE_HOST=
DATABASE_USER=
DATABASE_PASSWORD=
DATABASE_PORT=
COOKIE_SECRET=

Run yarn server and yarn client