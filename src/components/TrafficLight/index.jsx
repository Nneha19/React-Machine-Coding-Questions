import "./style.css";
import { useState, useEffect } from "react";

export default function TrafficLight() {
  const lightTimings = [
    { color: "red", duration: 4000 },
    { color: "yellow", duration: 500 },
    { color: "green", duration: 3000 },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % lightTimings.length);
    }, lightTimings[index].duration);

    return () => clearInterval(intervalId);
  }, [index]);

  const { color } = lightTimings[index];

  return (
    <div className="traffic-container">
      <div className="main-board">
        <div className={`circle circle1 ${color === "red" ? "red" : ""}`}></div>
        <div
          className={`circle circle2 ${color === "yellow" ? "yellow" : ""}`}
        ></div>
        <div
          className={`circle circle3 ${color === "green" ? "green" : ""}`}
        ></div>
      </div>
    </div>
  );
}
