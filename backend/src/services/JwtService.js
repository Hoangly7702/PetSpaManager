const jwt = require( 'jsonwebtoken' );
const dotenv = require('dotenv')
dotenv.config()

const generalAccessToken = async(payload)=> {
    console.log('payload: ',payload)
    const accessToken = jwt.sign({
        payload
    },process.env.ACCESS_TOKEN,{ expiresIn: "1h" });
    return accessToken;
}

const generalRefreshToken = async(payload)=> {
    console.log('payload: ',payload)
    const refreshToken = jwt.sign({
        payload
    }, process.env.REFRESH_TOKEN,{ expiresIn: "365d" });
    return refreshToken;
}

module.exports = {
    generalAccessToken,
    generalRefreshToken
}