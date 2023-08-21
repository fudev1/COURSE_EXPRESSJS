const express = require("express");
const { citationsRouter } = require("./Routers/citations.router");
const { forbiddenRouter } = require("./Routers/forbidden.router");
const { dashRouter } = require("./Routers/dashboard.router");
const { secretMiddleware } = require("./Middlewares/secretMiddleWare");
port = "8080";

const server = express();

server.use(citationsRouter);
server.use("/dashboard", secretMiddleware);
server.use("/dashboard", dashRouter);
server.use("/forbidden", forbiddenRouter);

server.listen(port, () => {
  console.log(`Serveur ok sur le port ${port}`);
});
