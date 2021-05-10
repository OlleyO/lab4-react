import React, { useState } from "react";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

const MoodSlider = () => {
  const [value, setValue] = useState(1);

  const emoji = (currValue) => {
    let em = "";
    switch (currValue) {
      case -1:
        em = "☹";
        break;
      case 0:
        em = "😐";
        break;
      case 1:
        em = "🙂";
        break;
      default:
        break;
    }

    return em;
  };

  return (
    <RangeSlider
      value={Number(value)}
      onChange={(e) => setValue(e.target.value)}
      tooltipLabel={(currentValue) => emoji(currentValue)}
      min={-1}
      max={1}
    />
  );
};

export default MoodSlider;
