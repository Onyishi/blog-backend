const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  usernname: {
    typpe: string,
    required: true,
    unique: true,
  },
  email: {
    type: string,
    required: true,
    unique: true,
  },
  password: {
    type: string,
    required: true,
    min: 6,
  },
}, {timestemps: true})      //createdAt and updatedAt

model.express = mongoose.model('user', UserSchema)