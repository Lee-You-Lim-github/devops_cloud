import { useState } from "react/cjs/react.development";
import Rating from "./Rating";

function Review({ review }) {
  const [showMenu, setShowMenu] = useState(false);
  const score = review.score;

  return (
    <div
      onMouseEnter={() => setShowMenu(true)}
      onMouseLeave={() => setShowMenu(false)}
      className="
    border-2 
    border-green-500 
    m-1 
    p-1
    pt-5 
    
    relative
    "
    >
      {showMenu && (
        <div className="text-xs absolute top-0.5 right-1">
          <span className="text-green-900 hover:text-green-600 cursor-pointer mr-1">
            수정
          </span>
          <span className="text-red-700 hover:text-red-600 cursor-pointer">
            삭제
          </span>
        </div>
      )}
      {review.text}
      <Rating score={score} />
    </div>
  );
}

export default Review;
