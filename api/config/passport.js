// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const adminModel = require("../model/admin")
// const validPassword = require("../libs/passwordUnit").validPassword

// const custom = {
    
// }

// const verifyCallBack = (username,password,done) => {
//     adminModel.findOne({username})
//     .then((admin)=>{
//         if(!admin) return done(null,false)
//         const isValid = validPassword(password,admin.hash,admin.salt)
//         if(isValid) {
//             return done(null,admin)
//         }else{
//             return done(null,false)
//         }
//     }).catch((err)=>{
//         done(err)
//     })
// }

// const strategy = new LocalStrategy(custom,verifyCallBack)
// passport.use(strategy)

// passport.serializeUser((admin,done)=>{
//     done(null,admin.id)
// })

// passport.deserializeUser((adminId,done)=>{
//     adminModel.findById(adminId)
//     .then((admin)=>{
//         done(null,admin)
//     })
//     .catch(err=>done(err))
// })