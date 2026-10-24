# CI/CD Pipeline with GitHub Actions

![CI/CD Pipeline](https://github.com/venki-codes/task2-cicd/actions/workflows/ci-cd.yml/badge.svg)

## 📌 Project Description

This project demonstrates how to implement a **CI/CD (Continuous Integration and Continuous Deployment) pipeline using GitHub Actions**.

Whenever code is pushed to the GitHub repository, GitHub Actions automatically tests the application, builds a Docker image, and pushes the image to Docker Hub.

## 🎯 Project Objectives

- Automate application testing.
- Build a Docker image automatically.
- Push Docker images to Docker Hub.
- Implement a simple CI/CD workflow using GitHub Actions.

## 🛠️ Technologies Used

- Node.js
- JavaScript
- Docker
- GitHub Actions
- Docker Hub
- Git and GitHub

## 📂 Project Structure

```text
task2-cicd/
│
├── public/
│   └── index.html
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── server.js
├── test.js
├── package.json
├── package-lock.json
├── Dockerfile
└── README.md
```

## ⚙️ CI/CD Workflow

The GitHub Actions workflow performs the following steps:

1. **Checkout Code** – Downloads the repository code.
2. **Setup Node.js** – Configures the Node.js environment.
3. **Install Dependencies** – Installs required dependencies using `npm ci`.
4. **Run Tests** – Executes application tests using `npm test`.
5. **Docker Login** – Logs in to Docker Hub using GitHub repository secrets.
6. **Build Docker Image** – Builds the Docker image.
7. **Push Docker Image** – Pushes the Docker image to Docker Hub.

The Docker image is pushed with two tags:

- `latest`
- Git commit SHA

## 🚀 Run the Project Locally

### 1. Clone the Repository

```bash
git clone https://github.com/venki-codes/task2-cicd.git
```

### 2. Navigate to the Project

```bash
cd task2-cicd
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Tests

```bash
npm test
```

### 5. Build Docker Image

```bash
docker build -t venkiiiiii/project-docker .
```

### 6. Run Docker Container

```bash
docker run -d -p 3000:3000 --name task2-cicd-app venkiiiiii/project-docker
```

### 7. Open the Application

Open your browser and visit:

http://localhost:3000

## 🐳 Docker Hub

Docker image repository:

https://hub.docker.com/r/venkiiiiii/project-docker

## 🔗 GitHub Repository

https://github.com/venki-codes/task2-cicd

## ✅ Project Result

Successfully implemented a CI/CD pipeline using GitHub Actions.

- Application tests run automatically.
- Docker image builds automatically after successful tests.
- Docker image is pushed to Docker Hub.
- Docker image is available with the `latest` tag and commit-specific tag.

## 👨‍💻 Author

**Venkatesh**

GitHub: https://github.com/venki-codes

Docker Hub: https://hub.docker.com/u/venkiiiiii
