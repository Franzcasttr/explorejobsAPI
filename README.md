# Job Listing Application

A simple job listing application inspired by platforms like LinkedIn, Indeed, and Glassdoor. This application allows users to register, log in, and view job listings. It provides a RESTful API for managing job postings and user authentication.

## 🚀 Features

- 📄 **User Registration**: Users can create an account to access job listings.
- 🔑 **User Login**: Secure login functionality using JWT (JSON Web Tokens).
- 👨‍💻 **Job Listings**: Users can view a list of available job postings.

## 🖥️ Technologies Used

- **NestJS**: A progressive Node.js framework for building efficient and scalable server-side applications.
- **TypeScript**: A superset of JavaScript that adds static types.
- **MySQL**: A powerful, open-source relational database system.
- **Prisma ORM**: A next-generation ORM for Node.js, NestJS, etc.., simplifying database access.
- **Swagger**: API documentation and testing tool.

## API Endpoints

### Authentication

#### Register a New User

- **Endpoint**: `POST /api/v1/auth/register`
- **Description**: This endpoint allows a new user to register an account. The user must provide their login credentials and other personal information. Upon successful registration, the user will be created in the database.
- **Request Body**:
  ```json
  {
    "user_login": "john_doe",
    "user_pass": "securePassword123",
    "user_nicename": "John",
    "user_email": "john.doe@example.com",
    "user_url": "https://example.com/johndoe",
    "user_activation_key": "abc123",
    "user_status": 1,
    "display_name": "John Doe"
  }
  ```
- **Sample Response**:
  - **201 Created**: User registered successfully.
  ```json
  {
    "id": "a3d39c95-2e7f-463e-bc7c-7d693f189666",
    "user_login": "john_doe",
    "user_nicename": "John",
    "user_email": "john.doe@example.com",
    "user_url": "https://example.com/johndoe",
    "user_registered": "2025-01-22T11:35:52.877Z",
    "user_activation_key": "abc123",
    "user_status": 1,
    "display_name": "John Doe"
  }
  ```
- **Response status**:
  - **201 Created**: User registered successfully.
  - **400 Bad Request**: Validation errors.

#### Login a User

- **Endpoint**: `POST /api/v1/auth/login`
- **Description**: This endpoint allows an existing user to log in to their account. The user must provide their login credentials. Upon successful login, a JWT access token will be returned, which can be used for subsequent authenticated requests.
- **Request Body**:
  ```json
  {
    "user_login": "john_doe",
    "user_pass": "securePassword123"
  }
  ```
- **Responses**:
  - **200 OK**: User logged in successfully.
    ```json
    {
      "access_token": "some.jwt.token",
      "user": {
        "id": 1,
        "user_login": "john_doe",
        "user_email": "john.doe@example.com",
        "user_nicename": "John"
      }
    }
    ```
  - **401 Unauthorized**: Invalid credentials.

### Job Listings

#### Get All Job Listings

- **Endpoint**: `GET /api/v1/jobs`
- **Description**: This endpoint retrieves a paginated list of job postings. The user must provide a valid JWT access token in the `Authorization` header to access this endpoint. The response will include job details such as title, company, location, and description.
- **Headers**:
  - `Authorization: Bearer <access_token>`
- **Query Parameters**:

  - `page`: (optional) Page number for pagination (default: 1)
  - `limit`: (optional) Number of listings per page (default: 15)

- **Sample Response**:
  - **200 OK**: Successfully retrieved job listings.
  ```json
  {
    "ID": 174,
    "post_author": 1,
    "post_date": "2024-08-10T15:45:43.000Z",
    "post_date_gmt": "2024-08-10T11:45:43.000Z",
    "post_title": "Master Your Interview: A Comprehensive Guide",
    "post_excerpt": "A guide to mastering the interview process.",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_name": "master-your-interview-a-comprehensive-guide",
    "post_modified": "2024-08-10T16:57:09.000Z",
    "guid": "https://example.com/job/174",
    "post_type": "post",
    "comment_count": 2
  }
  ```
- **Responses**:
  - **200 OK**: Successfully retrieved job listings.
  - **401 Unauthorized**: Invalid or missing token.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Franzcasttr/explorejobsAPI
   cd exploreJobsAPI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a MySQL database and update the connection settings in the `.env` file.

   ```plaintext
   DATABASE_URL=your_database_url_here
   JWT_SECRET=your_jwt_secret_here
   ```

4. Run the application:

   ```bash
   npm run start:dev
   ```

5. Access the Swagger documentation:
   - Open your browser and navigate to `http://localhost:8000/api/docs`.
