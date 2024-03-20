import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
    name: String,
    topic: String,
    date: Date,
    time: String,
});

export const Event = mongoose.model('Event', eventSchema);