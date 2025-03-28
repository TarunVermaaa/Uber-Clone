const http = require("http");
const app = require("./app");
const port = process.env.PORT || 4000;
const { initializeSocket } = require('./socket')

const server = http.createServer(app);

// Initialize the WebSocket server

initializeSocket(server)

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

