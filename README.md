# Application-Infrastructure-DevOps-Pipeline-with-Docker-AKS-Terraform-and-Monitoring
The nodejs-devops-project  demonstrates the full lifecycle of deploying and managing a Node.js application in a cloud-native environment using modern tools and best practices. It integrates various DevOps concepts and tools to provide a scalable, automated, and monitored deployment pipeline for a simple Node.js web application.

# Node.js DevOps Project

## Overview
This repository demonstrates a DevOps project where a Node.js application is containerized with Docker, deployed to Azure Kubernetes Service (AKS) using Terraform, integrated with a CI/CD pipeline (GitHub Actions), and monitored with Prometheus and Grafana.

---

## Features

- **Node.js Application**: A simple Express-based web server.
- **Containerization**: The application is packaged into a Docker image.
- **Azure Infrastructure**: AKS and Azure Container Registry (ACR) managed with Terraform.
- **Kubernetes Deployment**: Manifests for deploying the app, service, and ingress.
- **CI/CD Pipeline**: Automated build, push, and deployment using GitHub Actions.
- **Monitoring**: Prometheus and Grafana for application performance monitoring.

---

## Prerequisites

- [Docker](https://www.docker.com/)
- [Node.js](https://nodejs.org/)
- [Terraform](https://www.terraform.io/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)
- [Helm](https://helm.sh/)

---

## Setup Guide

### 1. Node.js Application

The application is located in the `app/` directory. It's a simple Express app that listens on port 3000.

**Run Locally**:
```bash
cd app
npm install
npm start
