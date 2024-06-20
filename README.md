# Slash Intern Task

## Project Overview

The Order Management System enables users to create, update, view, and delete orders. It integrates with a PostgreSQL for persistent storage.

## Description

Order Management System was the task assigned for an internship at Slash-Eg company. This system is designed to efficiently manage and process orders, handling various operations related to order management.

## Installation

```bash
git clone https://github.com/hellorapio/slash-intern-task
cd slash-intern-task
npm install
npm run migrate
npm run generate
npm run start:dev
```

## Environment Configuration

Create a .env file in the root directory of your project. Use the .env.example file provided below as a template for your environment variables:

```
# .env.example

# Server Port
PORT=3000
# Database Configuration
DB=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

```

## API Documentation

The API documentation for this project is available at the `/docs` endpoint. Accessing this endpoint will provide you with detailed information about the various API routes, including the expected request, response formats and examples for each endpoint.

Explore the API documentation to understand how to interact with the Order Management System and make the most of its features.

## Running the app

```bash
# development mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
