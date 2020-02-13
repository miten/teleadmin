import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

export const SessionSchema = new mongoose.Schema({
    patient: {type: Schema.Types.ObjectId, ref: 'Patient'},
    acc: {type: Schema.Types.ObjectId, ref: 'Employee'},
    medecin: {type: Schema.Types.ObjectId, ref: 'Employee'},
    files: [{type: Schema.Types.ObjectId, ref: 'Uploads.file'}],
    date: Date,

});
