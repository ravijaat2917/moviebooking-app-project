import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
    movieid:{
        type:Number,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    published:{
        type:Boolean,
        required:true
    },
    released:{
        type:Boolean,
        required:true
    },
    poster_url:{
        type:String,
        required:true
    },
    release_date:{
        type:String,
        required:true
    },
    publish_date:{
        type:String,
        required:true
    },
    artists:[],
    genres:[],
    duration:{
        type:Number,
        required:true
    },
    critic_rating:{
        type:String,
        required:true
    },
    trailer_url:{
        type:String,
        required:true
    },
    wiki_url:{
        type:String,
        required:true
    },
    story_line:{
        type:String,
        required:true
    },
    shows:[]
});

const movieModel = mongoose.model("movies" , movieSchema);

export default movieModel;