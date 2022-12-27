const mongoose = require('mongoose');
const { Schema } = mongoose;

const presentSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is mandatory. Please add a name']
  },
  image: {
    type: String,
    default: 'https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg'
  },
  price: {
    type: Number,
    min:0
  },
  recipient: {
    type: String,
    required: [true, 'Recipient is mandatory. Please add a recipient']
  },
  season: {
    type: String,
    enum: {
      values: ['birthday', 'christmas', 'invisible friend', 'other'],
    }
  }, 
  description: String
})

const Present = mongoose.model('Present', presentSchema);
module.exports = Present;

