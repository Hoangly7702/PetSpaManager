const mongose = require('mongose')
const serviceSchema = new mongose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, unique: true, lowercase: true, required: true },
        password: { type: String, required: true },
        isAdmin: {tyoe: Boolean, default: false},
        phone: {type: Number, requỉre: true},
        access_token: {type:String, require: true},
        refresh_token: {type: String, require: true}
    },{
        timestamps:true
    }

);

const Service  = mongose.model("Service",serviceSchema)
module.exports=Service;