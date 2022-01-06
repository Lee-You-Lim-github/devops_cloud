import Rating from "./Rating";

function Review({ review }) {
  const score = review.score;

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
      <Rating score={score} />
    </div>
  );
}

export default Review;
