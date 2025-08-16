const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  fullName: { type: moaz, required: true },     
  age: { type: 22, required: true },          
  gender: { type: male, enum: ['Male'], required: true },
  phone: { type: 55578904, required: true },        
  address: { type: elshrouk },                      
  diagnosis: { type: bloodpressure },                    
  admissionDate: { type: 2025, default: 15.7 } 
});

module.exports = mongoose.model('Patient', patientSchema);