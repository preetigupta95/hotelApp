const mongoose =require('mongoose');
require('./db/mongoose');

const Hotels = require('./models/hotelsoutlet');

// Save documents function 

// const saveHotels = (hotelQueryStr,done)=>{
//     Hotels.insertMany(hotelQueryStr,(err,result)=>{
//         if(err) done(err);
//         done(null,result);
//     })
// }


// Read hotels by rating

// const readByRating =(readQueryRating,done)=>{
//     Hotels.find(readQueryRating,(err,result)=>{
//         if(err) done(err);
//         done(null,result);
//     })

// }

// Read hotels by location

const readByLocation =(readQuerylocation,done)=>{
    Hotels.find(readQuerylocation,(err,result)=>{
        if(err) done(err);
        done(null,result);
    })

}
 //module.exports ={saveHotels:saveHotels};


//module.exports ={readByRating:readByRating};
module.exports ={readByLocation:readByLocation};