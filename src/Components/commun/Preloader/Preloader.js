import React from "react";

let Preloader = (props) => {
  return (
    <div
      style={{
        position: "absolute",
      }}
    >
      <img
        src="https://samherbert.net/svg-loaders/svg-loaders/grid.svg"
        alt="preloader"
      />
    </div>
  );
};

export default Preloader;
