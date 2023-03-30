const express = require("express");

const app = express();

app.use("/", express.static("../src"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

app.get("/about", (req, res) => {
    res.send("<h1>About</h1>");
});

app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
});
