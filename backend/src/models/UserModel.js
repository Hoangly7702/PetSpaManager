const mongose = require('mongose')
const userSchema = new mongose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: {type:String, require: true},
        type: {type: String, require: true},
        price: {type: Number, require: true},
        rating: {type:Number, default: 0, require: true},
        description:{type:String, require: true}

    },{
        timestamps:true
    }

);

const User  = mongose.model("User",userSchema)
module.exports=User;