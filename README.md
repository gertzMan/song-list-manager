# Song List Manager

<img src="https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692280701/music_r3fvuy.jpg" alt="Cover Image"  />

Welcome to the Song List Manager repository! This project is a simple web application built with a Node.js backend using NestJS and a React frontend. The app's purpose is to read and manage a list of songs from a CSV file, transform them into lowercase, and display them in an organized table.

## Instructions

- the frontend repo can be found here: https://github.com/gertzMan/song-list-manager-frontend. It's build ready for production version is found in the in client folder of this's repo's root. The server is set to serve it.
- npm i
- `docker-compose up -d` to start the db
- npm start
- for production run `npm run build` and use the compiled result found in the dist folder.
- when uploading to a production environment make sure to set the environment variables correctly depends (on
  which ever hosting service is chosen.)

## Showcase

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692382959/1_t57dzv.png)

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692383681/2_xxrgem.png)

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692383680/3_nckp2g.png)

## Features

**Backend (NestJS):**

- Reads and processes song data from a CSV file.
- Transforms song titles and bands into lowercase.
- Stores processed song data in a SQL database.
- Provides an endpoint for importing song and fetching ordered song lists.

**Frontend (React):**

- Displays the list of songs in an organized table.
- Fetches song data from the backend using API calls.
- Offers a simple and intuitive user interface for song exploration.

## Stack

- Backend: Node.js, NestJS
- Frontend: React
- Database: SQL (PostgreSQL)
- Docker: Used for containerization
- TypeScript: Used for improved code quality and maintainability
