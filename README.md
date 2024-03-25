<p align="center" width="100%">
    <img width="33%" src="https://media.licdn.com/dms/image/D560BAQGTIoqe_jjDQg/company-logo_200_200/0/1665776720976/themainstack_logo?e=1719446400&v=beta&t=r5Y5YCNTpJuJYHfKsIk7-gaoGRkg4L1P187_xR_E1Jo">
</p>
<p align="center">Mainsntack Backend Assessment Test</p>

# Node.js Store Application

This is a simple Node.js store application that allows users to register, login, and create products. It uses MongoDB for data storage and JSON Web Tokens (JWT) for authentication.

## Prerequisites

Before you begin, make sure you have the following installed on your machine:

- Node.js
- MongoDB
- npm or yarn

## Getting Started
1. Clone the repository:

   ```bash
   git clone https://github.com/jedstroke/mainstack-backend.git .
   cd nodejs-store
   npm install
   ```

2. Set up environment variables:

    Create a ```.env``` file in the root directory with the following content:

   ```bash
    PORT=<YOUR PORT>
    MONGODB_URI=mongodb://localhost:27017/store
    JWT_SECRET=lookhomewardsangle
   ```
3. Run the application:

    ```bash
    npm run dev
    ```
    The server will start at http://localhost:<YOUR_PORT>.
4. Import the API collection into Postman from the ```__api__``` dir see how requests are made.

5. Or pull my Docker image
    ```bash
    docker run -d -p 3000:3000 -e MONGODB_URI="mongodb+srv://<username>:%<password>@<username>.9solltw.mongodb.net/store?retryWrites=true&w=majority" -e JWT_SECRET="lookhomewardangle" jedshock/mainstack-play-store:latest
    ```

## Contributing
Contributions are welcome! Fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License..
