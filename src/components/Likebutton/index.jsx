import { BsFillHeartFill } from "react-icons/bs";
import { useState } from "react";
import "./style.css";

export default function Likebtn() {
  const [like, setLike] = useState(true);
  const [status, setStatus] = useState("inactive");

  function handleLike() {
    if (like) {
      setStatus("active");
      setLike(!like);

    } else {
      setStatus("inactive");
      setLike(!like);
    }
  }

  return (
    <div className="maincontainer">
      <div className="like" onClick={handleLike}>
        <span className={status}>
          <BsFillHeartFill />
        </span>
        <span>Like</span>
      </div>
    </div>
  );
}
