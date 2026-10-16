
# Dockerize a Web App

## Description
A simple web application built using HTML, CSS,
JavaScript, Node.js, and Docker.

## Build Image
docker build -t pro-docker-img .

## Run Container
docker run -d -p 3000:3000 --name pro-docker-app pro-docker-img

## Run with Docker Compose
docker compose up --build -d

## Access Application
http://localhost:3000

## Technologies
HTML, CSS, JavaScript, Node.js, Docker, Docker Compose