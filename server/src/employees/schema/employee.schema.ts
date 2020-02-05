import {Schema} from 'mongoose';

export const EmployeeSchema = new Schema({
    _id:  Schema.Types.ObjectId,
    name: { type: String, required: false },
    surname: String,
    gender: String,
    city: String,
    cps: Number,
    email: String,
    phone: String,
    birthday: Date,
    photo: String,
    status: { type: Number, required: true },
});
