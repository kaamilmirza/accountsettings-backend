const jwt = require('jsonwebtoken');
const config = require('./config');


const checkToken = (req, res, next) => {
    let token = req.headers['authorization'].split(' ')[1];
    if (token) {
        jwt.verify(token, config.key, (err, decoded) => {
            if (err) {
                return res.json({
                    error : err,
                    status: false,
                    msg: 'token is invalid',
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.json({
            status: false,
            msg: 'token is not provided',
        });
    }
};

module.exports = {
    checkToken: checkToken,
}