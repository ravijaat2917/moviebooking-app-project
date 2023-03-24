import userModel from '../server.js';

const signUp = async (req,res) =>{
    let data = req.body ;
    userModel.insertOne(data);
    res.send(`User Data Saved to Database`)
}

const login = async (req,res) =>{
    let filter = req.body ;
    let users = userModel.find();
    var logedUser ;
    users.forEach(user => {
        if(user.username === filter.username && user.password=== filter.password){
            logedUser = user;
        }
    });
    if( logedUser ){
        res.send(`User logged in`)
    }else{
        res.send(`Wrong Credentials`)
    }
}

const logout = async (req,res) =>{
    res.send(`Loged Out`)
}

const getCouponCode = (req , res) =>{
    res.send(logedUser.coupens);
}

const bookShow = (req , res )=>{
    res.send(logedUser.bookingRequests);
}

export {signUp , login , logout , getCouponCode , bookShow};