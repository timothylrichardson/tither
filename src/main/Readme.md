## Tither - Seamless Giving Management

Overview
Tither is a secure, user-friendly web application designed for Mt. Pilgrim Metropolitan Baptist Church. This system streamlines electronic payment collection, membership record management, and end-of-year contribution reporting for tax purposes.

Built with a robust tech stack, the application uses:
- Frontend: HTML, CSS, and JavaScript for a responsive and engaging user experience.
- Backend: Spring Boot framework for authentication, payment processing, and reporting services.
- Database: MySQL with Hibernate for seamless object-relational mapping.

The application is named Tither, with the primary class TitherApplication located in the org.mt_pilgrim.tither package.

Key Features:
- Login Page: Collects user credentials securely.
- Member Dashboard: Displays contribution history and allows users to generate end-of-year tax reports.
- Contribution History Page: Enables filtering contributions by date and type.

The application is styled with an external CSS file (style.css) and uses a JavaScript file (index.js) for dynamic functionality. Testing is supported through a test class, TitherApplicationTests, with test cases planned for future implementation.

Project Structure
The Tither project is structured across four key layers:

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

```
Frontend Layer
├── Login Page
├── Member Dashboard
│   ├── Contribution History
│   └── Tax Report
├── Contribution History Page

Backend Services
├── Authentication Service
│   └── Role Management
├── Payment Processing Service
│   └── Visa/MC Gateway Integration
├── Contribution Management Service
│   └── Database CRUD Operations
├── Report Generation Service
    └── Report Templates

Database
├── Users Table
├── Contributions Table
└── Roles Table

Security
├── Role-Based Access
├── Data Privacy
├── Immutable Logging
└── Audit Trail
```

Project Requirements
To work with this project, you need the following:

1. Spring Boot Framework:
   - For building stand-alone, production-grade Spring-based applications with minimal configuration.

2. Properties File:
   - Used to externalize configuration, typically named application.properties or application.yml.

3. UTF-8 Encoding:
   - Ensure the properties file uses UTF-8 encoding to correctly interpret all characters.

Getting Started
Follow these steps to set up and run Tither on your local machine:

### Prerequisites
Ensure you have the following installed:
1. **Java Development Kit (JDK) 11 or later**:
   - Download and install from [Oracle](https://www.oracle.com/java/technologies/javase-downloads.html) or [OpenJDK](https://openjdk.org/).

2. **MySQL Server**:
   - Download and install from [MySQL](https://dev.mysql.com/downloads/).
   - Create a database named `tither_db`.

3. **Maven**:
   - Ensure Maven is installed for managing dependencies. Download it from [Maven](https://maven.apache.org/download.cgi).

4. **Git**:
   - Clone the repository using Git. Install from [Git](https://git-scm.com/).

### Installation Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/tither.git
   cd tither
   ```

2. **Configure the Application**:
   - Navigate to `src/main/resources`.
   - Open `application.properties` and update the following with your MySQL credentials:
     ```properties
     spring.datasource.url=jdbc:mysql://localhost:3306/tither_db
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Build the Application**:
   - Run the following command to build the project:
     ```bash
     mvn clean install
     ```

4. **Run the Application**:
   - Start the application using:
     ```bash
     mvn spring-boot:run
     ```

5. **Access the Application**:
   - Open your web browser and navigate to:
     ```
     http://localhost:8080
     ```

6. **Login**:
   - Use the default admin credentials provided in the documentation or database seed script.

You are now ready to use Tither!