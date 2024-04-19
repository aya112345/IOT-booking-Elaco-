import mongoose from "mongoose";
const SpaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  //city 
  section: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  
//   title: {
//     type: String,
//     required: true,
//   },
  desc: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  tables: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    required: true,
  },
  //motamayza
  featured: {
    type: Boolean,
    default: false,
  },

});

export default mongoose.model("Space", SpaceSchema)