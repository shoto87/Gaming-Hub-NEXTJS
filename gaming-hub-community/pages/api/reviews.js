import dbConnect from '../../lib/dbConnect';
import Review from '../../models/review';

export default async function handler(req, res) {
    const { method } = req;
    await dbConnect();

    switch (method) {
        case 'GET':
            try {
                const reviews = await Review.find({});
                res.status(200).json({ success: true, data: reviews });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        case 'POST':
            try {
                const review = await Review.create(req.body);
                res.status(201).json({ success: true, data: review });
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
