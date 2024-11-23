import React, { useState, useEffect } from "react";

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = -1;
    const interval = setInterval(() => {
      if (index < text.length) {
        index++;
        setDisplayText((prev) => prev + text.charAt(index));
        // Increment the index after appending the character
      } else {
        clearInterval(interval); // Clear the interval when typing is complete
      }
    }, 100);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [text]);

  return (
    <div style={{ padding: "20px", fontSize: "50px", color: "white", fontWeight: 600 }}>
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingAnimation;
