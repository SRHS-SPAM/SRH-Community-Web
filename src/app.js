const express = require("express");

const app = express();
const port = 3000;

app.use("/", express.static("../src"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/html/login.html");
});

app.get("/signup", (req, res) => {
    res.sendFile(__dirname + "/html/signup.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
