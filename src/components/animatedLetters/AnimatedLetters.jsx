import React, { useState } from "react";
import "./animate.scss";

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  //   setStrArray(array);
  //   console.log(strArray);
  return (
    <>
      <span className="letter-animation-container">
        {strArray.map((char, i) => (
          <span key={char + i} className={`${letterClass} _${i + idx}`}>
            {char}
          </span>
        ))}
      </span>
      {/* <h1 className="_title bounce">Test</h1> */}
    </>
  );
};

export default AnimatedLetters;
