# Tither Project

## Overview

Tither is a comprehensive web application designed to help users manage their tithing records efficiently. Built with a 
robust backend using Spring Boot and a dynamic frontend using HTML, CSS, and JavaScript, Tither ensures a seamless user
experience. This project demonstrates the implementation of a complete web application with CRUD operations, database 
connectivity, and user authentication.

## Project Structure

The project is divided into four main sections: Frontend, Backend, Database, and Security. Below is a visual diagram of
the project/file structure:

```
tither
├── src
│   ├── main
│   │   ├── java
│   │   │   └── org
│   │   │       └── mt_pilgrim
│   │   │           └── tither
│   │   │               ├── controller
│   │   │               │   └── UserController.java
│   │   │               ├── model
│   │   │               │   └──

User.java


│   │   │               ├── repository
│   │   │               │   └── UserRepository.java
│   │   │               ├── service
│   │   │               │   └── UserService.java
│   │   │               └── exception
│   │   ├── resources
│   │   │   ├── application.properties
│   │   │   └── static
│   │   │       ├── css
│   │   │       │   └── styles.css
│   │   │       ├── js
│   │   │       │   └── scripts.js
│   │   │       └── templates
│   │   │           └── index.html
│   └── test
│       └── java
│           └── org
│               └── mt_pilgrim
│                   └── tither
│                       └── UserServiceTest.java
├── .gitignore
├── README.md
└──

pom.xml


```

## Getting Started

### Prerequisites

- Java 11 or higher
- Maven
- MySQL

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/timothylrichardson/tither.git
   cd tither
   ```

2. **Set up the database**:

- Create a MySQL database named tither
- Update the database configuration in application.properties with your MySQL username and password.

3. **Build the project**:
   ```bash
   mvn clean install
   ```

4. **Run the application**:
   ```bash
   mvn spring-boot:run
   ```
   
### Usage

- Access the application at `http://localhost:8080`.
- Use the provided endpoints to manage users and their tithing records.

### Endpoints

- `GET /api/users`: Retrieve all users.
- `GET /api/users/{id}`: Retrieve a user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/{id}`: Update an existing user.
- `DELETE /api/users/{id}`: Delete a user.

## Project Details

### Frontend Layer

- **Login Page**: Facilitates secure user authentication.
- **Member Dashboard**:
    - Displays contribution history.
    - Generates end-of-year tax reports.
- **Contribution History Page**: Allows users to filter contributions by date and type.

### Backend Services

- **Authentication Service**:
    - Manages secure user login and registration.
    - Includes role management for different user types.
- **Payment Processing Service**:
    - Integrates with Visa/MasterCard payment gateways for seamless transactions.
- **Contribution Management Service**:
    - Handles database CRUD operations for contributions.
- **Report Generation Service**:
    - Creates customizable reports based on user inputs.
    - Includes predefined report templates.

### Database

- **Users Table**: Stores user account information and credentials.
- **Contributions Table**: Tracks all user contributions.
- **Roles Table**: Manages user roles and permissions.

### Security

- **Role-Based Access**: Ensures only authorized users can access specific features.
- **Data Privacy**: Implements encryption and secure handling of sensitive data.
- **Immutable Logging**: Provides tamper-proof logs for auditing.
- **Audit Trail**: Tracks all significant actions within the application.

### Testing

- **Unit Tests**: JUnit tests for service methods

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any questions or inquiries, please contact [Timothy Richardson](mailto:timothylrichardson@protonmail.com).

You are now ready to use Tither!
```

