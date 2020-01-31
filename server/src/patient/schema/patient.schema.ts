import * as mongoose from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    id: String,
    date: {type: Date, default: Date.now},
    name: String,
    surname: String,
    cps: Number,
    email: String,
    phone: String,
    birthday: Date,
    roles: {type: Date, default: 0},
});
