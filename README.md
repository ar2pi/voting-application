# Voting App
## Overview
  The Voting App is a real-time web application that allows users to create topics for voting and express their opinions. Built using React for the frontend and Node.js with Redis for the backend, the app provides an intuitive interface for users to engage in discussions and vote on various topics.


## Screenshots

  1. **Create Topic Page**:
     ![Screenshot 2024-10-22 132302](https://github.com/user-attachments/assets/5c42b166-1b95-4102-b50b-0f087036fc4c)
     ![Screenshot 2024-10-22 132333](https://github.com/user-attachments/assets/e0bc4312-b036-4dc8-8be2-44f1041356e1)

  3. **Vote Page**:
     ![Screenshot 2024-10-22 132410](https://github.com/user-attachments/assets/ecd4d6df-5583-4dce-9d9e-21bb9fc147f2)

  5. **Results Page**:
      ![Screenshot 2024-10-22 132422](https://github.com/user-attachments/assets/eb6def3c-6070-41db-8cbe-05ab4ea35547)

## Tech Stack

**Client:** 
      React,
      React Router,
      Axios,
      Framer Motion,
      Tailwind CSS

**Server:** Node, Express , Redis

   ## Installation 
  **Prerequisites**:
  
   Node.js (latest version recommended)
   
          
  **Installing Redis For Windows**

  1. Download Redis:

     Go to the Redis for Windows GitHub page.
            Download the latest .msi installer.
         
  2. Install Redis:

        Run the installer and follow the setup instructions.
         
  3. Start Redis:

     Open the command prompt and navigate to the Redis  installation directory.

     **Run the command**:
     
     ```bash
          redis-server
            
**For Ubuntu**
1. Update package index:
     ```bash
        sudo apt update
        
  2. Install Redis:
      ```bash
      sudo apt install redis-server
     
  3. Start Redis server:
      ```bash
      sudo service redis-server start
         
  4. Test Redis: You can test if Redis is working by running:
     ```bash
      redis-cli ping
         
  You should receive a response of PONG.

  For macOS
  
  1. Install Homebrew (if not already installed): Open a terminal and run:

     ```bash
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
       
2. Install Redis:
    ```bash
    brew install redis
     
3. Start Redis:
   ```bash
   brew services start redis
     
4. Test Redis: Run:
   ```bash
   redis-cli ping
     
 You should receive a response of PONG.

  **Backend Setup**
  
  1. Clone the repository:
     ```bash
        git clone https://github.com/your-username/voting-app.git
        cd voting-app/voting-app-server 

  2. Install dependencies:
     ```bash
        npm install
        # or
        yarn install

  3. Start the backend server:
     ```bash
        npm start
     
 **Frontend Setup**

  1.  Navigate to the frontend directory:
      ```bash
        cd ../voting-app-client
        
  2. Install dependencies:
     ```bash
        npm install
        # or
        yarn install

  3. Start the frontend server:
     ```bash
        npm start
    
## API Endpoints
  POST /api/topics: Creates a new topic.

  GET /api/topics: Retrieves all topics.

  GET /api/topics/vote: Retrieves topic details for voting.

  POST /api/topics/vote: Submits a vote.

  GET /api/topics/results: Retrieves voting results.

## Database Structure
  Topics: Stored in Redis as hash fields. Each topic includes a description.

  Votes: Stored as JSON strings in Redis, tracking user votes for each topic.

## Node Dependencies
  ****Frontend****

  react: For building the user interface.

  react-router-dom: For routing between pages.

  axios: For making HTTP requests.

  framer-motion: For animations.

  tailwindcss: For styling.
        
  ****Backend****

  express: For server setup.

  body-parser: For parsing request bodies.

  cors: For enabling CORS.

  redis: For connecting to the Redis database.      

## Contributing

  Contributions are welcome! If you'd like to report a bug or suggest a feature, please open an issue on the GitHub repository.


## License

This project is licensed under the MIT License.


## Acknowledgements

Special thanks to the communities and libraries that made this project possible.

