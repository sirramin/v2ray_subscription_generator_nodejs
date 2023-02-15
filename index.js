// Import express module
const express = require("express");

// Import base64 module
const base64 = require("base64-js");

// Create an app object
const app = express();

// Define a route for GET requests to "/sub"
app.get("/sub", (req, res) => {

  const vmess = 'vmess://your_key'
  // Convert text to a buffer
  const buffer = Buffer.from(vmess);

  // Encode the buffer as base64
  const encoded = base64.fromByteArray(buffer);

  // Send the encoded string as response
  res.send(`${encoded}`);

});

// Listen on port 3000
app.listen(3000, () => {
  console.log("App is running on port 3000.");
});