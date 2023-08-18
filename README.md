# Song List Manager

<img src="https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692280701/music_r3fvuy.jpg" alt="Cover Image"  />

Welcome to the Song List Manager repository! This project is a simple web application built with a Node.js backend using NestJS and a React frontend. The app's purpose is to read and manage a list of songs from a CSV file, transform them into lowercase, and display them in an organized table.

## Instructions

- npm i
- `docker-compose up` -d to start the db
- npm start
- when uploading to production environment make sure to set the environment variables to production

## Showcase

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692305035/1_bzkcrt.png)

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692305034/3_gz3d3v.png)

![](https://res.cloudinary.com/dp2xkwxbk/image/upload/v1692305034/2_e2qs1o.png)

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
- Database: SQL (configured in your backend database settings)
- Docker: Used for containerization
- TypeScript: Used for improved code quality and maintainability
