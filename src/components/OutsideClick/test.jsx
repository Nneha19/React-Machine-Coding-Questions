
import { useRef, useState } from "react";
import useOutsideClick from ".";
import './style.css'

export default function OutsideClickTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div className="outside-main" ref={ref}>
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button className="outsidebtn" onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}