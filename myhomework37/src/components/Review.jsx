function Review({ review }) {
  return (
    <div
      className="
    border-2 
    border-green-500 
    m-1 
    p-1 
    hover:bg-green-100 
    cursor-pointer"
    >
      {review.text}
      {`평점: ${review.score}`}
    </div>
  );
}

export default Review;
