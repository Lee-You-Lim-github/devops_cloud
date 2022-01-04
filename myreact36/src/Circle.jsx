import "Circle.css";

function Circle({ number, backgroundColor }) {
  return (
    <div className="circle" style={{ backgroundColor }}>
      {number}
    </div>
  );
}

export default Circle;
