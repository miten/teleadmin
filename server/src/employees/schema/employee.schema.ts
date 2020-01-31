import * as mongoose from 'mongoose';

export const MedecinSchema = new mongoose.Schema({
    id: String,
    name: String,
    surname: String,
    cps: Number,
    email: String,
    phone: String,
    birthday: Date,
    roles: {type: Number, default: 1},
});

export const AccSchema = new mongoose.Schema({
    id: String,
    name: String,
    surname: String,
    cps: Number,
    email: String,
    phone: String,
    birthday: Date,
    roles: {type: Number, default: 2},
});
