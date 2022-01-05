function Review({ review }) {
  return (
    <div className="bg-white-200 hover:bg-blue-400 m-1 p-1 rounded-lg text-lg border-blue-200 border-2 hover:border-blue-500 hover:scale-105 cursor-pointer">
      {review.text}
      {`평점: ${review.score}`}
    </div>
  );
}

export default Review;
