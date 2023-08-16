# Twitter-clone

## Instructions to Run the Twitter Clone Project

Welcome to the Twitter clone project! This document will guide you through the necessary steps to set up and run the project on your local computer.

## Prerequisites

- Make sure you have [Nodejs](https://nodejs.org/es) installed on your system.
- If you haven't installed the AWS Command Line Interface (CLI) yet, you can download it [here](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) and follow the installation instructions.
  .
## Watch this video for an explanation of this project

📺 [ Project Explanation Video](https://www.youtube.com/watch?v=oHz7exxq20Q&ab_channel=JorgeDiaz)

## Configuration Steps

1. **Clone the Repository:** Open your terminal and execute the following command to clone the repository to your computer:

   ```bash
   git clone https://github.com/JDavidcor23/twitter-clone.git
   ```

2. **Configure Environment Variables:** In the `twitter-clone` and server `folders`, you'll find files named .env.template. Rename them to .env and edit each one with the necessary information. These files will contain the required environment variables for the project.

3. **Install Dependencies:** Open a terminal in both the `twitter-clone` and `server` folders, and run the following command to install the required dependenciess:

   ```bash
   cd twitter-clone
   npm install
   ```

   ```bash
   cd server
   npm install
   ```

4. **Configure AWS Variables:** Configure your AWS credentials on your machine by executing the following command in the terminal:

   ```bash
   # Replace with your AWS variables
   aws configure
   ```

5. **Run project:** Once you've completed the previous steps, you're ready to run the project:
   ```bash
   # From the 'server' folder, start the server
   cd server
   npm start
   ```
   ```bash
   # From the 'twitter-clone' folder, start the front-end application
   cd twitter-clone
   npm start
   ```

That's it! You should now have the Twitter clone project up and running in your local environment.

## Running Tests

If you want to run the tests, navigate to the twitter-clone and server folders in your terminal and type the command npm run test. This will execute the configured tests in both parts of the project and provide you with insights into the application's integrity. Just like running the project, you can initiate the tests by following these steps:

:

```bash
# From the 'server' folder, start the server
cd server
npm test
```

```bash
# From the 'twitter-clone' folder, start the front-end application
cd twitter-clone
npm test
```

## Libraries Used

**aws-sdk**: AWS SDK for JavaScript to interact with Amazon Web Services.

**ReactJS**: A JavaScript library for building user interfaces.

**NestJS**: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

**Firebase**: A comprehensive app development platform with tools to help you build, improve, and grow your app.

**Jest**: A delightful JavaScript Testing Framework with a focus on simplicity.

**Testing Library**: A set of utilities for testing user interfaces, encouraging testing best practices.

If you encounter any issues during the setup or execution process, feel free to consult the project's documentation or seek help online. Enjoy exploring the Twitter clone!
