# ChatApp

## Overview
ChatApp is a real-time messaging application built with Next.js, React, and Socket.IO. It allows users to create accounts, add friends, and engage in conversations.

## Features
- User authentication and authorization
- Real-time messaging with Socket.IO
- Friend management (add, remove, block)
- Group chats
- User profile management
- Settings and customization options

## Technologies Used
- **Frontend**: Next.js, React, React Hook Form, Tailwind CSS
- **Backend**: Node.js, Express.js, Sequelize, PostgreSQL
- **Real-time communication**: Socket.IO
- **Authentication**: JSON Web Tokens (JWT)

## Installation

To run the application locally, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/your-username/chat-app.git

2. **Create a new file named .env in the in chat-app-backend**:


   ```bash
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=chat_app
   DB_USER=your_username
   DB_PASSWORD=your_password
         
   SECRET_KEY=your_secret_key
         
   EMAIL_USER=your_nodemailer_email
   EMAIL_PASS=your_nodemailer_password

Replace the values with your own database credentials, a secret key for JWT, your Cloudinary URL, and your Nodemailer email and password.   

3. **Install Dependencies for All Servers and also check node version is updated**:
   ```bash
   node -v
    
**For Next.js**:

    
    cd chat-app
    npm install
    # or
    yarn install

**For Node.js backend**

    cd chat-app-backend
    npm install
    # or
    yarn install   

4. **Create a new folder named uploads chat-app-backend folder if not exist , and inside it, create another folder named profile_pictures. This folder will store user profile pictures**:

       mkdir uploads
       mkdir uploads/profile_pictures   

5. **Start the Application**:
### Start the Next.js Development Server:

    cd chat-app
    npm run dev
    # or
    yarn dev   

### Start the Node.js Backend Server:  

    cd chat-app-backend
    npm run dev
    # or
    yarn dev   

### Start the WebSocket Server:
  
    cd socket
    npm start
    # or
     yarn start  

6. **Usage**:

    Open the application in your web browser: http://localhost:3000

    Create an account or log in to an existing one.
    Add friends and start conversations.    

7. **Screenshots**.
    #### Login Page
     ![Screenshot 2024-10-22 092919](https://github.com/user-attachments/assets/63d84d5e-381b-433a-b545-c1b145d9d981)

    #### Main Chat Page
      ![Screenshot 2024-10-22 092825](https://github.com/user-attachments/assets/b7068052-b7f0-4fb3-ab24-48ac9782dc49)

## Contributing

   Contributions are welcome! If you'd like to report a bug or suggest a feature, please open an issue on the GitHub repository.

## License

   ChatApp is licensed under the MIT License.

## Acknowledgments

   Special thanks to the Next.js, React, and Socket.IO communities for their support and resources.    

