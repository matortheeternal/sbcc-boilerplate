const db = require('db');
const { registerAction } = require('app/restService');

registerAction('get', '/cars', (_req, res, next) => {
    db('cars').select().then(cars => {
        res.json({ cars });
    }).catch(next);
});
