const mongose = require('mongoose')
const orderSchema = new mongose.Schema(
    {
        pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
        service: { type: mongoose.Schema.Types.ObjectId, ref: 'SpaService', required: true },
        orderDate: { type: Date, required: true },
        note: String,
        status: { type: String, enum: ['Scheduled', 'InProgress', 'Completed', 'Cancelled'], default: 'Scheduled' },
        rating: { type: Number, min: 1, max: 5 },
        feedback: String,
        price: {type: Number, required: true}
        
    }, {
    timestamps: true
}

);

const Order = mongose.model("Order", orderSchema)
module.exports = Order;