const mongoose  = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require:(true, "you fucked up"),
        minlength:(3, "not enough letters")
    },

    price: {
        type: Number,
        require:(true, "you fucked up"),
        minlength:(3, "not enough")
    },
    description: {
        type: String,
        require:(true, "you fucked up"),
        minlength:(3, "not enough")
    }
}, { timestamps: true});
module.exports.Product = mongoose.model('Product', ProductSchema);
