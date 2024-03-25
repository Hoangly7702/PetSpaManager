const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const { generalAccessToken, generalRefreshToken } = require("./JwtService");
const { response } = require("express");
// create and save user to the database

const createUser = (newUser) => {
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = newUser;

        try {
            const checkUser = await User.findOne({ email: email });

            if (checkUser != null) {
                resolve({
                    status: 'OK',
                    message: 'Email already exists'
                })

            }
            const hash = await bcrypt.hashSync(password, 10);
            console.log('Hashed Password: ', hash);

            const createUser = await User.create({
                name,
                email,
                password: hash,
                confirmPassword,
                phone
            })
            if (createUser) {
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
    return new Promise(async (resolve, reject) => {
        const { name, email, password, confirmPassword, phone } = login;

        try {
            const checkUser = await User.findOne({ email: email });

            if (checkUser === null) {
                resolve({
                    status: 'OK',
                    message: 'The user is not define'
                })

            }

            const comparePassword = bcrypt.compareSync(password, checkUser.password);

            if (!comparePassword) {
                resolve({
                    status: 'ERROR',
                    message: "PASS.isAdminD_IS_INCORRECT"
                })
            }
            const accessToken = await generalAccessToken({
                id: checkUser._id,
                name: checkUser.name,
                isAdmin: checkUser.isAdmin
            })

            const refreshToken = await generalRefreshToken({
                id: checkUser._id,
                name: checkUser.name,
                isAdmin: checkUser.isAdmin
            })

            console.log('accessToken :>> ', accessToken);
            console.log('refreshToken :>> ', refreshToken);

            // delete checkUser.password;
            resolve({
                status: "OK",
                message: "Logged in successfully!",
                // data: checkUser,
                accessToken,
                refreshToken
            })




        } catch (e) {
            reject(e);

        }
    })
}


const updateUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        // const { name, email, password, confirmPassword, phone } = update;

        try {
            

            const checkUser = await User.findOne({
                _id: id
            });
            console.log("checkUser :>> ", checkUser);
           
            if (checkUser === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }

            const updateUser = await User.findByIdAndUpdate(id, data, {new: true});
            console.log('updateUser :>> ', updateUser);

            resolve({
                status: "OK",
                message: "Update user is successfully!",
                data: updateUser
 
            })

        } catch (e) {
            reject(e);

        }
    })
}


const deleteUser = (id, data) => {
    return new Promise(async (resolve, reject) => {
        // const { name, email, password, confirmPassword, phone } = update;

        try {
            

            const checkUser = await User.findOne({
                _id: id
            });
            console.log("checkUser :>> ", checkUser);
           
            if (checkUser === null){
                resolve({
                    status: 'OK',
                    message: 'The user is not defined'
                })
            }

            // await User.findByIdAndDelete(id);


            resolve({
                status: "OK",
                message: "Delete user is successfully!",
 
            })

        } catch (e) {
            reject(e);

        }
    })
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}