import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    game: { type: String, required: true },
    rating: { type: Number, required: true },
    reviewText: { type: String, required: true },
}, { timestamps: true });

export default mongoose.models.Review || mongoose.model('Review', ReviewSchema);
