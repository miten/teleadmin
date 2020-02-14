import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    gender: {type: String,  enum: [ 'M', 'F' ]},
    sessions: [{type: Schema.Types.ObjectId, ref: 'Session'}],
    name: {type: String, lowercase: true, required: true },
    surname: {type: String, lowercase: true, required: true},
    city: {type: String, lowercase: true},
    street: {type: String, lowercase: true},
    phone:  {type: String, lowercase: true},
    secu: {type: String, unique: true, required: true, minlength: 15, maxlength: 15},
    email: {type: String, pattern: '^.+\@.+$'},
    birthday: Date,
});
