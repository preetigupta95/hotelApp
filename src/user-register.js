const mongoose =require('mongoose');
require('./db/mongoose');

const Users = require('./models/users');

// Save document function 

// const saveUser = (quertyStr,done)=>{
//     Users.insertMany(quertyStr,(err,result)=>{
//         if(err) done(err);
//         done(null,result);
//     })
// }

// Read by query document function


// const readByQuery =(readQuery,done) =>{
//     Users.find(readQuery,(err,result)=>{
//         if (err) done(err);
//         done(null,result);
//     })

// }

// Signup user

 const  signupUser= (quertyStr,done)=>{
    Users.find({email : quertyStr.email},  (err, docs)=> {
        if (docs.length){
            done('Email exists already, Please choose another email id');
        }else{
            Users(quertyStr).save((err,result)=>{
                if(err) done(err);
                done(null,result);
            });
        }
    });
}

// Login User

const loginUser =(readQuery,done) =>{
    Users.find(readQuery,(err,result)=>{
        if (!result.length) {
        done("User does not exixts");
        }
        else {
        done(null,result); 
        }
    })

}



// Save User document function

// const saveUser = (quertyStr,done)=>{
//      Users(quertyStr).save((err,result)=>{
//         if(err) done(err);
//         done(null,result);
//     })
// }

//module.exports={readByQuery:readByQuery};
//module.exports ={saveUser};
//module.exports={readByQuery:readByQuery,saveUser:saveUser};
//module.exports ={signupUser:signupUser};
module.exports ={loginUser:loginUser};