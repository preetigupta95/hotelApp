const mongoose = require('mongoose');

const hotelschema = {
    name: {
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
    
    favourite_food: {
        type: [String]
    },
    rating: {
        type: Number
    },
    reviews: {
        type: [{
            individual_rating: Number,
            review: String
        }]
    },
    Contactno: {
        type: [String]
    },
    images: {
        type: [String]
    },
    menu: {
        type: [String]
    }


};

const hotelOutlet = mongoose.model('hoteloutlet', hotelschema);

module.exports = hotelOutlet;