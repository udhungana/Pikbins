const mongoose = require("mongoose");
const StatusSchema = mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: 
    {
      type: String
    }
});

module.exports = mongoose.model("status", StatusSchema);