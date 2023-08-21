async function secretMiddleware( request, response, next) {
    const { secret } = request.query;
    if (secret !== 'svp') {
        return response.redirect('/forbidden');
    }
    next()
}

exports.secretMiddleware = secretMiddleware