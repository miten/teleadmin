import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true },
    surname: {type: String, lowercase: true, required: true },
    email: String,
    phone: String,
    birthday: Date,
    secu: {type: String, unique: true, required: true },

});
