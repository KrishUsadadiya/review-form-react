import React, { useState } from "react";
import "./App.css";
import ReviewForm from './component/ReviewForm';
import ReviewList from './component/ReviewList';

function App() {
  const [reviews, setReviews] = useState([]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="app">
      <ReviewForm addReview={addReview} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default App;
