const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/productdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log ('Made Connection'))
.catch(err => console.log('You fucked up', err))