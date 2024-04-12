const mongoose = require('mongoose');

//Schema is a constructor function from mongoose
const Schema = mongoose.Schema;

const eventSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  //every event should be created by a user
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

//export it to reuse it, we named it 'Event' it will be used in user as Event also
module.exports = mongoose.model('Event', eventSchema);
