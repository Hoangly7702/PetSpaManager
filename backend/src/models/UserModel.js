const mongose = require('mongoose')
const userSchema = new mongose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, lowercase: true, required: true },
        password: { type: String, required: true },
        isAdmin: {tyoe: Boolean},
        phone: {type: Number, requỉre: true},
        access_token: {type:String},
        refresh_token: {type: String}
    },{
        timestamps:true
    }

);

const User  = mongose.model("User",userSchema)
module.exports=User;