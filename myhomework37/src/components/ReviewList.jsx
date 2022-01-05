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
  const [pageName, setPageName] = useState("");
  const [reviewList, setReviewList] = useState(INITIAL_REVIEW);

  const [fieldValues, handleChange, clearFieldValues] = useFieldValues({
    text: "",
    score: 3,
  });

  const changePageName = (pageName) => {
    setPageName("review_form");
  };

  const appendReview = () => {
    const review = { ...fieldValues };

    setReviewList((prevFieldValues) => [...prevFieldValues, review]);
    clearFieldValues();
  };

  return (
    <div className="review-list">
      <h1>Sing 2</h1>
      <h2 className="text-lg underline">Review List</h2>
      <button
        className="bg-red-500 text-gray-100 cursor-pointer"
        onClick={changePageName}
      >
        리뷰 작성
      </button>
      {pageName === "review_form" && (
        <ReviewForm
          handleChange={handleChange}
          fieldValues={fieldValues}
          handleSubmit={appendReview}
        />
      )}
      <hr />
      {JSON.stringify(fieldValues)}
      {reviewList.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
}

export default ReviewList;
