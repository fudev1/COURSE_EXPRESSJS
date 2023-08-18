const express = require('express');
const server = express();
const port = "8002";
const { versionRouter } = require('./Routers/version.router');


server.use(versionRouter);


server.listen(port, () => {
    console.log(`Serveur à l'écoute sur ${port}`);
});