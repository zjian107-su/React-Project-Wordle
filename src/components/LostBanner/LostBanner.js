import React from "react";
import Banner from "../Banner";

function LostBanner() {
  return (
    <Banner status="sad">
      <p>
        Sorry, the correct answer is <strong>LEARN</strong>.
      </p>
    </Banner>
  );
}

export default LostBanner;
