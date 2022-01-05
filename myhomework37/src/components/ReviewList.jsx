import { useState } from "react";
import Review from "./Review";

const INITIAL_REVIEW = [
  { text: "내적 댄스를 불러일으키는 영화" },
  { text: " 1편보다 좀 더 탄탄해진 느낌! OST가 좋아요~" },
  { text: "스토리는 많이 유치하긴하지만 훌륭한 음악들로 커버한다." },
];

function ReviewList() {
  const [reviewList, setReviewList] = useState(INITIAL_REVIEW);
  return (
    <div>
      <h1>Sing 2</h1>
      <h2>Review List</h2>
      {reviewList.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
