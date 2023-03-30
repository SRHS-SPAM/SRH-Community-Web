const express = require("express");

const app = express();

app.use("/", express.static("../src"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/html/login.html");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
