const mongoose = require('mongoose');
const Users = require('./user-register');
const Hotels = require('./hotel-register');

// For User 

const queryStr ={ 
    name: 'Kavita',email:'kavita@gmail.com',password:'1234',location:{location_name:'ABC',city:'Delhi',state:'Delhi'},contactno:['23456789','43242342','32432423']
};

// For Hotels

const hotelQueryStr =[ 
{
    name: 'Le Maridian',location:{location_name:'ABC',latitude:'1111',longitude:'2222',city:'Delhi',state:'Delhi',land_mark:'aaaaa'},
    favourite_food:['Palak Paneer','Dal Fried','Chiken Biryani'],rating:5,
    reviews:[ 
        {
            individual_rating:'3', review: 'Nice'
        },
        {
            individual_rating:'5', review: 'Very good food'
        }
    ],
    contactno:['23456789','43242342','32432423'],
    images:['https://s-ec.bstatic.com/images/hotel/max1024x768/175/175217439.jpg','https://s-ec.bstatic.com/images/hotel/max1024x768/175/175215630.jpg']
},
{
    name: 'Taj Place',location:{location_name:'ABC',latitude:'3333',longitude:'4444',city:'Noida',state:'UP',land_mark:'bbbb'},
    favourite_food:['Palak Paneer','Dal Fried','Chiken Biryani'],rating:4,
    reviews:[ 
        {
            individual_rating:'3', review: 'Nice'
        },
        {
            individual_rating:'5', review: 'Very good food'
        }
    ],
    contactno:['23456789','43242342','32432423'],
    images:['https://s-ec.bstatic.com/images/hotel/max1024x768/175/175217439.jpg','https://s-ec.bstatic.com/images/hotel/max1024x768/175/175215630.jpg']
},
{
    name: 'Holiday Inn',location:{location_name:'ABC',latitude:'5555',longitude:'6666',city:'Delhi',state:'Delhi',land_mark:'cccc'},
    favourite_food:['Palak Paneer','Dal Fried','Chiken Biryani'],rating:5,
    reviews:[ 
        {
            individual_rating:'3', review: 'Nice'
        },
        {
            individual_rating:'5', review: 'Very good food'
        }
    ],
    contactno:['23456789','43242342','32432423'],
    images:['https://s-ec.bstatic.com/images/hotel/max1024x768/175/175217439.jpg','https://s-ec.bstatic.com/images/hotel/max1024x768/175/175215630.jpg']
},
{
    name: 'Sheela',location:{location_name:'ABC',latitude:'7777',longitude:'8888',city:'Noida',state:'UP',land_mark:'dddd'},
    favourite_food:['Palak Paneer','Dal Fried','Chiken Biryani'],rating:3,
    reviews:[ 
        {
            individual_rating:'3', review: 'Nice'
        },
        {
            individual_rating:'5', review: 'Very good food'
        }
    ],
    contactno:['23456789','43242342','32432423'],
    images:['https://s-ec.bstatic.com/images/hotel/max1024x768/175/175217439.jpg','https://s-ec.bstatic.com/images/hotel/max1024x768/175/175215630.jpg']
}
]

// Save Hotels documents

// Hotels.saveHotels(hotelQueryStr, (err, result) => {
//     if (err) {
//         return console.log("error ", err);
//     } else {
//         console.log(JSON.stringify(result));

//     }
// });

// Read by query in hotels collection (Rating wise filter)

// const readQueryRating= { rating:5 };

// Hotels.readByRating(readQueryRating,(err,result)=>{
//     if (err) {
//         return console.log('Reading error',err);
//     }
//     console.log(JSON.stringify(result));
// })

// Read by query in hotels collection (location wise filter)

const readQuerylocation= { 'location.city':  'Noida' };

Hotels.readByLocation(readQuerylocation,(err,result)=>{
    if (err) {
        return console.log('Reading error',err);
    }
    console.log(JSON.stringify(result.length));
})

// Signup user function

// Users.signupUser(queryStr, (err, result) => {
//     if (err) {
//         return console.log(err);
//     } else {
//         console.log(JSON.stringify(result));

//     }
// });

// Login user function

// const readQuery= { email:'preeti@gmail.com',password:'1234'};
// Users.loginUser(readQuery,(err,result)=>{
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Succussfully login",JSON.stringify(result));
// })
