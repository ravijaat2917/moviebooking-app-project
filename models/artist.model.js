import mongoose from "mongoose";
const artistschema = new mongoose.Schema({
    artistid:{
        artistid:{
            type:Number,
            required:true
        },
        first_name:{
            type:String,
            required:true,
        },
        last_name:{
            type:String,
            required:true,
        },
        wiki_url:{
            type:String,
            required:true
        },
        profile_url:{
            type:String,
            required:true
        },
        movies:[],
    }
});

const artistModel = mongoose.model('artists' , artistschema);

export default artistModel ;