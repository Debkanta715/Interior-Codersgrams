import { useState, useMemo } from "react";
import { reviewsData } from "./reviewsData";
import googleReviewImg from "../assets/Google-reviw-img.svg";

const cities = ["All", "Gurgaon", "Bangalore", "Mumbai", "Pune", "Chennai", "Hyderabad", "Noida"];

const Reviews = () => {
  const [activeCity, setActiveCity] = useState("All");

  const reviews = reviewsData[activeCity] || [];

  const avgRating = useMemo(() => {
    if (reviews.length === 0) return 0;
    const total = reviews.reduce((sum, r) => sum + r.rating, 0);
    return (total / reviews.length).toFixed(1);
  }, [reviews]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">
        Our Clients Simply <span className="text-pink-500">Love</span> Our Work
      </h1>
      <p className="text-gray-600 mb-10">
        Because building great customer relationships is the best business strategy.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* LEFT SIDE */}
        <div className="border p-6 rounded-lg flex flex-col items-center">
          {/* <h2 className="text-xl font-semibold mb-4">Google Reviews</h2> */}
         <img className="w-50 h-auto" src={googleReviewImg} alt="google" /> 
         
          <p className="text-5xl font-bold">{avgRating}</p>

          <div className="flex gap-1 my-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>
                {i < Math.round(avgRating) ? "⭐" : "☆"}
              </span>
            ))}
          </div>

          <p className="text-gray-500">
            Based on {reviews.length} Reviews
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-2">
          
          {/* FILTER BUTTONS */}
          <div className="flex flex-wrap gap-3 mb-6">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setActiveCity(city)}
                className={`px-4 py-2 rounded-full border text-sm ${
                  activeCity === city
                    ? "bg-pink-500 text-white"
                    : "bg-white text-gray-600"
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* REVIEWS */}
          <div className="space-y-6">
            {reviews.length === 0 ? (
              <p className="text-gray-500">No reviews available.</p>
            ) : (
              reviews.map((review, index) => (
                <div
                  key={index}
                  className="border-b pb-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < review.rating ? "⭐" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {review.time}
                    </span>
                  </div>

                  <p className="mb-2 text-gray-700">{review.text}</p>

                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.city}</p>
                </div>
              ))
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Reviews;