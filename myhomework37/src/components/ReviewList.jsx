import { useState } from "react";
import Review from "./Review";
import "./ReviewList.css";
import ReviewForm from "./ReviewForm";
import useFieldValues from "hooks/useFieldValues";

// 특정 대상을 삭제하기 위해서는 식별자를 추가
const INITIAL_REVIEW = [
  { id: 1, text: "내적 댄스를 불러일으키는 영화", score: 4 },
  { id: 2, text: " 1편보다 좀 더 탄탄해진 느낌! OST가 좋아요~", score: 5 },
  {
    id: 3,
    text: "스토리는 많이 유치하긴하지만 훌륭한 음악들로 커버한다.",
    score: 2,
  },
];

function ReviewList() {
  const [showForm, setShowForm] = useState(false);
  const [reviewList, setReviewList] = useState(INITIAL_REVIEW);

  // setFieldValuse : 목적은 수정!!!
  const [fieldValues, setFieldValuse, handleChange, clearFieldValues] =
    useFieldValues({
      text: "",
      score: 3,
    });

  // const changedPage = (pageName) => {
  //   setShowForm("review_form");
  // };

  // 새로운 리뷰 저장 + 기존 리뷰 수정
  const appendReview = () => {
    // review는 데이터베이스에 저장하면 id를 할당해 줌.

    const { id: reviewId } = fieldValues;
    //새로운 리뷰 저장
    if (!reviewId) {
    }
    // 기존 리뷰 수정
    else {
    }

    // const reviewId = new Date().getTime();

    // const review = { ...fieldValues, id: reviewId };

    // setReviewList((prevFieldValues) => [...prevFieldValues, review]);

    clearFieldValues();
    setShowForm((prev) => !prev);
  };

  const deleteReview = (deletingReview, ReviewIndex) => {
    console.log("Deleting", deletingReview.id, ReviewIndex);
    //TODO : reviewList 배열 상탯값에서 deletingReivew
    // setReviewList((prevFieldValues) =>
    //   prevFieldValues.filter((_, index) => ReviewIndex !== index)
    // );

    // 교수님 풀이
    // setReviewList((prevFieldValues) =>
    //   prevFieldValues.filter((review) => review.id !== deletingReview.id)
    // );
    setReviewList((prevFieldValues) =>
      prevFieldValues.filter(
        ({ id: reviewId }) => reviewId !== deletingReview.id
      )
    );
  };

  // 수정할 땐 id가 없음.
  const willEditReview = (editingReivew) => {
    console.log("Editing", editingReivew);

    setFieldValuse(editingReivew);
    setShowForm(true);
  };

  return (
    <div className="review-list">
      <h1>Sing 2</h1>
      <h2 className="text-xl mb-2 border-b-2 border-orange-500">Review List</h2>

      {showForm && (
        <ReviewForm
          fieldValues={fieldValues}
          handleChange={handleChange}
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

      {/* {JSON.stringify(fieldValues)} */}
      {reviewList.map((review, index) => (
        <Review
          key={review.id}
          review={review}
          handleDelete={() => deleteReview(review, index)}
          handleEdit={() => willEditReview(review)}
        />
      ))}
    </div>
  );
}

export default ReviewList;
