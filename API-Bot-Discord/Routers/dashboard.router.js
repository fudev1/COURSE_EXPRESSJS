const { Router } = require('express');
const { secretMiddleware } = require('../Middlewares/secretMiddleWare');

const dashRouter = Router();

dashRouter.get('/',(request, response)=>{
    response.send(`<h1>Dashbord</h1>`);
})

dashRouter.use(secretMiddleware)

exports.dashRouter = dashRouter;