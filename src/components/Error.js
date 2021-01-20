import React from "react";

function Error({ error }) {
  return (
    <h2 className="content" style={{ color: "white" }}>
      {error}. But you could always try another search.
    </h2>
  );
}

export default Error;
