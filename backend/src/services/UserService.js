const User = require("../models/UserModel");
const bcrypt = require( "bcrypt" );
// create and save user to the database

const createUser = (newUser) => {
    return new Promise( async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser;

        try {
            const checkUser =  await User.findOne({email: email});
            
            if(checkUser != null){
                resolve({
                    status: 'OK',
                    message:'Email already exists'
                })
                
            } 
            const hash =  await bcrypt.hashSync(password,10);
            console.log('Hashed Password: ', hash);
            
            const createUser = await User.create({
                name, 
                email, 
                password: hash, 
                confirmPassword, 
                phone
            })
            if(createUser){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser
                })
            }
            
        } catch (e) {
            reject(e);
            
        }
    })
}


const loginUser = (login) => {
    return new Promise( async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = login;

        try {
            const checkUser =  await User.findOne({email: email});
            
            if(checkUser != null){
                resolve({
                    status: 'OK',
                    message:'Email already exists'
                })
                
            } 
            const hash =  await bcrypt.hashSync(password,10);
            console.log('Hashed Password: ', hash);
            
            const createUser = await User.create({
                name, 
                email, 
                password: hash, 
                confirmPassword, 
                phone
            })
            if(createUser){
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: createUser
                })
            }
            
        } catch (e) {
            reject(e);
            
        }
    })
}

module.exports = {
    createUser,
    loginUser
}