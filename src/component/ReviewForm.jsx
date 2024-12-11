import React, { useState } from "react";
import "./ReviewForm.css";

const CommentF = ({ addReview }) => {
  const [username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && Email && reviewText && rating) {
      const newReview = { username, Email, reviewText, rating };
      addReview(newReview);
      setUsername("");
      setEmail("");
      setReviewText("");
      setRating("");
    } else {
      alert("Please Fill ");
    }
  };

  const handelrating = (ratingvalue) => {
    setRating(ratingvalue)
  }

  return (
    <>
    
    <h1>Review-Form</h1>

    <div className="row">
      <div className="w-2">
        <img src="/public/Quantum brain wave!.gif" alt="" />
      </div>
      <div className="w-2">
      <form className="review-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={Email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Write your review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Select Star </option>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>
            {num}  Star
          </option>
        ))}
      </select>
      <button className="submit" type="submit">Submit Review</button>
    </form>
      </div>
    </div>

    </>

  );
}

export default CommentF;
