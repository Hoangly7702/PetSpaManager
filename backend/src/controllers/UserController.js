const UserService = require( "../services/UserService" );

const createUser = (req, res) => {
    try {
        console.log(req.body);
        // await UserService.createUser( req.body )
    } catch (error) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports={
    createUser
}