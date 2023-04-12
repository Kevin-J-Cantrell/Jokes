const mongoose = require('mongoose');//  mongoose module exports 
 
const JokeSchema = new mongoose.Schema({// create a new UserSchema object
    setup: {
        type: String
    },
    punchline: {
        type: String
    },
  
});
 
const joke = mongoose.model('joke', JokeSchema); 
 
module.exports = joke; 
