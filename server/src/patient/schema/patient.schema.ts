import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    phone: String,
    birthday: Date,
    secu: String,

});
