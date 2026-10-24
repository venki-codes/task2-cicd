# CI/CD Pipeline with GitHub Actions

![CI/CD Pipeline](https://github.com/venki-codes/task2-cicd/actions/workflows/ci-cd.yml/badge.svg)


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

GitHub Actions automates the following steps:

1. Checking out the project.
2. Setting up Node.js.
3. Installing dependencies.
4. Testing the application.
5. Building the Docker image.

The workflow runs automatically when code is pushed to the main branch or when a pull request is created.

## Repository
https://github.com/venki-codes/task2-cicd