import * as React from "react";

function OptionallyDisplayed({ display, children }) {
  return display === true ? <>{children}</> : null;
}

export default OptionallyDisplayed;
