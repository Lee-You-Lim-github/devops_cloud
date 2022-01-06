import { useState } from "react";
import Review from "./Review";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import useFieldValues from "hooks/useFieldValues";

const INITIAL_REVIEW = [
  { text: "내적 댄스를 불러일으키는 영화", score: 4 },
  { text: " 1편보다 좀 더 탄탄해진 느낌! OST가 좋아요~", score: 5 },
  { text: "스토리는 많이 유치하긴하지만 훌륭한 음악들로 커버한다.", score: 2 },
];

function ReviewList() {
  const [showForm, setShowForm] = useState(false);
  const [reviewList, setReviewList] = useState(INITIAL_REVIEW);

  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    text: "",
    score: 3,
  });

  // const changedPage = (pageName) => {
  //   setShowForm("review_form");
  // };

  const appendReview = () => {
    const review = { ...fieldValues };

    setReviewList((prevFieldValues) => [...prevFieldValues, review]);
    clearFieldValues();
    setShowForm((prev) => !prev);
  };

  return (
    <div className="review-list">
      <h1>Sing 2</h1>
      <h2 class="text-xl mb-2 border-b-2 border-orange-500">Review List</h2>

      {showForm && (
        <ReviewForm
          handleChange={handleChange}
          fieldValues={fieldValues}
          handleSubmit={appendReview}
        />
      )}
      {!showForm && (
        <button
          className="bg-orange-200 hover:bg-orange-400 p-1 rounded text-sm cursor-point"
          onClick={() => setShowForm((prev) => !prev)}
        >
          리뷰 작성
        </button>
      )}

      {JSON.stringify(fieldValues)}
      {reviewList.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
