import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    cps: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
