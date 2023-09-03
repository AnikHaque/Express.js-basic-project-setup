const app = require('./app'); // Import the Express app configuration from app.js

const PORT = 3000; // Set the port to listen on, using 3000 as a default

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
