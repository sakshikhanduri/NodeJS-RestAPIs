const mongoose = require('mongoose')





const connectDB = (url) =>{
    return mongoose.connect(url)
}
// mongoose
// .connect(connectionString)
// .then(()=>{
//     console.log('CONNECTED TO DB....')
// })
// .catch((err)=> console.log(err))

module.exports = connectDB;