const { Router }= require('express');

const forbiddenRouter = Router();


forbiddenRouter.get('/',(request, response)=>{
    response.send(`
    <h1>You shall not passsssssss<//h1>
    <p>Vous n'êtes pas autorisé à naviguer de ce côté-ci </p>
    `)
})

exports.forbiddenRouter= forbiddenRouter;