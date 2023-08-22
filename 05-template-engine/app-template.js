const express = require("express");
port = "8080";

const server = express();


server.listen(port, () => {
    console.log(`Serveur ok sur le port ${port}`);
});