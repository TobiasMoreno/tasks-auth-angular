# Personal Project - Web Application with Angular and Firebase

This is a personal project developed using **Angular** for the frontend and **Firebase** as the cloud database. The application is fully **responsive**, automated, and follows best practices by using **routing**, **services**, **features**, **authentication (Firebase Auth)**, and a modern **user interface (UI)**.

## Features

- **Firebase Cloud Database**: Firebase is used to securely manage and store data in the cloud.
- **Authentication with Firebase Auth**: An authentication system implemented to protect private areas of the application.
- **Frontend with Angular**: The application is developed using Angular, ensuring modular and scalable development.
- **Responsive Design**: The design adapts to any device, providing an optimized user experience on both mobile and desktop.
- **Dynamic Routing**: Smooth navigation between different views, with routing implemented to ensure an organized structure.
- **Services**: Business logic is handled through reusable services, improving code maintainability.
- **Specific Features**: Modules and components are separated for different functionalities, keeping the code modular.
- **User Interface (UI)**: Modern and attractive design focused on the user experience.

## Technologies Used

- **Angular**: Framework for frontend development.
- **Firebase**: Cloud-based database to store and manage data.
- **HTML and CSS**: Used for structuring and styling the application.
- **TypeScript**: The primary language used in Angular.
- **Bootstrap**: Utilized to create a responsive interface.

## Installation and Usage

Follow these steps to clone and run the project locally:

1. Clone this repository:
    ```bash
    git clone https://github.com/TobiasMoreno/tasks-auth-angular.git
    ```

2. Navigate to the project directory:
    ```bash
    cd tasks-auth-angular
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

4. Start the application:
    ```bash
    ng serve
    ```

5. Open the application in your browser at `http://localhost:4200/`.

## Project Structure

```plaintext
public/
├──  assets/                # Static resources
|
src/
│
├── app/
│   ├── auth/               # Authentication module
│   │    ├── data-access/   # Business logic through services
│   │    ├── features/      # Specific modules and components
│   │    ├── ui/            # User interface components
│   ├── core/          
│   ├── shared/ 
│   │    ├── data-access/    
│   │    ├── header/  
│   │    ├── ui/ 
│   ├── tasks/  
│   │    ├── data-access/    
│   │    ├── header/  
│   ├── app.component.ts
│   
├── environments/          # Environment configurations (development, production)
└── styles.css             # Global styles
