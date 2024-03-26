const jwt = require('jsonwebtoken')
const dotenv = require( 'dotenv' )
dotenv.config()

const authMiddleware = (req, res, next) => {
    console.log('checkToken', req.headers.token);
    const token = req.headers.token.split(' ')[1]
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, user) {
        console.log("ERROR: ", err);
        if (err){
            return res.status(404).json({
                message: 'The authemtication',
                status: 'ERR'
                 
            })
        }
        
        console.log('user: ',user) // bar
    });
}

module.exports = {
    authMiddleware,
}