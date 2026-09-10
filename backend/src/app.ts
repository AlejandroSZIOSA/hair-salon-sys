import express from "express"; //require calls from the server

const app = express();

app.listen(3000, () => {
  console.log("running on port 3000");
});
