import mongoose from "mongoose";
const artistschema = mongoose.Schema({
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
        // wiki_url:`https://en.wikipedia.org/wiki/${first_name}_${last_name}`,
        // profile_url:`https://upload.wikimedia.org/wikipedia/commons/a/ac/${first_name}_${last_name}.jpg`,
        movies:[],
    }
});

const artistModel = mongoose.model('artists' , artistschema);

export default artistModel ;