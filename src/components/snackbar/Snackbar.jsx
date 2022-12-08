import React, { useState } from "react";

import "./snackbar.css";

const Snackbar = (props) => {
  const [timeLapse, setTimeLapse] = useState(5);
  return (
    <>
      <div id="snackbar" className="show">
        <h4>Snackbar</h4>
      </div>
    </>
  );
};

export default Snackbar;
