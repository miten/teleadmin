import {Schema} from 'mongoose';

export const EmployeeSchema = new Schema({
    _id:  Schema.Types.ObjectId,
    name: {type: String, lowercase: true, required: true },
    surname: {type: String, lowercase: true, required: true },
    gender: {type: String, lowercase: true },
    city: {type: String, lowercase: true },
    cps: {type: String, lowercase: true, unique: true},
    email: {type: String, lowercase: true },
    phone: {type: Number, lowercase: true },
    birthday: Date,
    photo: {type: String, lowercase: true },
    status: { type: Number, required: true },
});
