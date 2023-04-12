const mongoose = require('mongoose'); // Install mongoose

                                //change the DB name
mongoose.connect('mongodb://127.0.0.1:27017/UserDB', {//change the DB name
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));