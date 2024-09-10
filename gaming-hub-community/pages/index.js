import React from 'react';
import dbConnect from '../lib/dbConnect';
import Review from '../models/review';

export default function Home({ reviews }) {
    return (
        <div>
            <h1 className="text-3xl font-bold">Gaming Hub Community</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {reviews.map((review) => (
                    <div key={review._id} className="border p-4 rounded">
                        <h2>{review.gameTitle}</h2>
                        <p>{review.reviewText}</p>
                        <p>Rating: {review.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    await dbConnect();
    const reviews = await Review.find({});
    return {
        props: {
            reviews: JSON.parse(JSON.stringify(reviews)),
        },
    };
}
