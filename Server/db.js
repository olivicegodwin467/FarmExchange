const mongoose = require('mongoose');

module.exports = ()=>{
    const connectionParams = {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true
    }
    try {
        mongoose.connect(process.env.DB, connectionParams);
        console.log('Connected to database successfully'); 
    } catch (error) {
        console.log('Error connecting to the database. \n' + error);
        console.log('Exiting process');
        process.exit(1);
    }
}