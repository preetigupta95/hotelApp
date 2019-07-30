const mongoose = require('mongoose');

const Users = mongoose.model('Users', {
    name: {
        type: String,
        required: true


    },
    email: {
        type: String,
        required: true


    },
    password: {
        type: String,
        required: true

    },
    location: 
         {
            location_name: { type:String, required:true},
            latitude: String,
            longitude: String,
            city: { type:String, required:true},
            state: { type:String, required:true},
            land_mark: String
            
        },
        
    
    contactno: {
        type: [String]

    }

})

module.exports = Users