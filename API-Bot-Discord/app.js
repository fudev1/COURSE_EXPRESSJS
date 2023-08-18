const express = require('express');
const server = express();
const port = "8002";
const { versionRouter } = require('./Routers/version.router');
const { citationsRouter } = require('./Routers/citations.router');

// Mes liens Routers
server.use(versionRouter);
server.use(citationsRouter);

server.listen(port, () => {
    console.log(`Serveur à l'écoute sur ${port}`);
});