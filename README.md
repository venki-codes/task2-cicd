# CI/CD Pipeline with GitHub Actions

## Description
This project demonstrates a CI/CD pipeline using GitHub Actions to automate the build and testing of a Dockerized web application.

## Project
A simple web application built using HTML, CSS, JavaScript, Node.js, and Docker.

## Technologies
- HTML
- CSS
- JavaScript
- Node.js
- Docker
- Docker Compose
- GitHub Actions

## Docker Build
```bash
docker build -t task2-cicd .
```

## Run Application
```bash
docker run -d -p 3000:3000 --name task2-cicd-app task2-cicd
```

## Application URL
http://localhost:3000

## CI/CD Workflow
GitHub Actions will be used to automate:
1. Checking out the project.
2. Installing dependencies.
3. Testing the application.
4. Building the Docker image.
5. Publishing the Docker image.

## Repository
https://github.com/venki-codes/task2-cicd