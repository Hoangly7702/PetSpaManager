const mongose = require('mongoose')
const serviceSchema = new mongose.Schema(
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

const Service  = mongose.model("Service",serviceSchema)
module.exports=Service;