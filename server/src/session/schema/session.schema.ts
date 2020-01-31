import * as mongoose from 'mongoose';
import {Schema} from 'mongoose';

export const SessionSchema = new mongoose.Schema({
    _id: {type: mongoose.Schema.Types.ObjectId, index: true, required: true, auto: true},
    patient_id: Schema.Types.ObjectId,
    acc_id: Schema.Types.ObjectId,
    medecin_id: Schema.Types.ObjectId,
    date: Date,

});
