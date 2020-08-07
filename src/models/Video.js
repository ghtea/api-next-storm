const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');


var schemaVideo= new Schema({
  _id: { type: String, default: uuidv4() }
  , subject: { _id:String, model:String} // where this link belong to, ex:  "dfdfhefef-fdfd" , "Comp"
  
  , author: String
  
  , content: String // "link: youtube, twitch"
  
  , listLike: [String] 
  
  ,created: Date
  ,updated: Date
  
}, { collection: 'Video_', versionKey: false, strict: false});


module.exports = mongoose.model('Video', schemaVideo);