import { useState } from "react/cjs/react.development";
import Rating from "./Rating";

// review : 보여줄 review 객체
// handleDelete : 인자없는 함수, 삭제 버튼 클릭 시에 호출
// handleEdit: 인자없는 함수, 수정 버튼 클릭 시에 호출

function Review({ review, handleDelete, handleEdit }) {
  const [showMenu, setShowMenu] = useState(false);

  const score = review.score;

  const handleClickedDeleteButton = () => {
    // handleDelete가 속성값이 없을 때에 대한 안내가 없기에, 비추천
    // handleDelete && handleDelete();

    // handleDelete가 있을 때만 호출
    if (handleDelete) {
      handleDelete();
    } else {
      console.warn("[Review] handleDelete 속성값이 지정되지 않았습니다.");
    }
  };

  const handlhandleClickedEditButtoneEdit = () => {
    if (handleEdit) {
      handleEdit();
    } else {
      console.warn("[Review] handleEdit 속성값이 지정되지 않았습니다.");
    }
  };

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
          <span
            onClick={handlhandleClickedEditButtoneEdit}
            className="text-green-900 hover:text-green-600 cursor-pointer mr-1"
          >
            수정
          </span>
          <span
            onClick={handleClickedDeleteButton} // 함수로서 하지 않으면 e를 인자로 받음.  {handleDelete} X
            className="text-red-700 hover:text-red-600 cursor-pointer"
          >
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
