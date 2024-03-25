const UserService = require("../services/UserService");

const createUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValidEmail = reg.test(email);
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: "Please provide all the required fields"
            });
        }
        else if (!isValidEmail) {
            console.error('Invalid email format:', email);
            return res.status(200).json({
                // success: false,
                status: 'ERR',
                message: 'Invalid email format.'
            });
        }
        else if (password !== confirmPassword) {
            return res.status(200).json(
                {
                    status: 'ERR',
                    message: 'Passwords do not match.'
                });
        }
        // console.log('is valid email : ', isValidEmail);

        const resp = await UserService.createUser(req.body)
        return res.status(200).json(resp);
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}



const loginUser = async (req, res) => {
    try {
        console.log(req.body);
        const { name, email, password, confirmPassword, phone } = req.body;
        const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const isValidEmail = reg.test(email);
        if (!name || !email || !password || !confirmPassword || !phone) {
            return res.status(200).json({
                status: 'ERR',
                message: "Please provide all the required fields"
            });
        }
        else if (!isValidEmail) {
            console.error('Invalid email format:', email);
            return res.status(200).json({
                // success: false,
                status: 'ERR',
                message: 'Invalid email format.'
            });
        }

        // console.log('is valid email : ', isValidEmail);

        const resp = await UserService.loginUser(req.body)
        return res.status(200).json(resp);
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


const updateUser = async (req, res) => {

    try {
        const userID = req.params.id
        const data = req.body

        if(!userID){
            return res.status(200).json({
                status: 'ERR',
                message: 'No user id provided!'
            })
        }

        console.log('user ID in controller :>> ', userID);
        const response = await UserService.updateUser(userID,data);

        return res.status(200).json(response);
    } catch (e) {
        return res.status(404).json({
            message: e
        })

    }

}



module.exports = {
    createUser,
    loginUser,
    updateUser
}