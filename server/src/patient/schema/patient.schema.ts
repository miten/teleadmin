import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    name: {type: String, lowercase: true, required: true },
    surname: {type: String, lowercase: true},
    secu: {type: String, unique: true},
    email: String,
    phone: String,
    birthday: Date,
});
