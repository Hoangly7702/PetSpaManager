const mongose = require('mongose')
const petSchema = new mongose.Schema(
    {
        name: { type: String, required: true },
        age: { type: Number, required: true},
        species: {type: String},
        weight: {type: Number, required: true},
        image: {type: String, required: true},
        ownerId: { 
            type: mongose.Schema.Types.ObjectId,  
            ref: 'User', 
            required: true 
        }
    },{
        timestamps:true
    }

);

const Pet  = mongose.model("Pet",petSchema)
module.exports=Pet;