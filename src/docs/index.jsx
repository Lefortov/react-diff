import React from "react";
import { render } from "react-dom";
import Diff from "../../lib";
import "./styles.css";

function Demo() {
  return (
    <div>
      <h1>Demo with examples of the component</h1>
      <Diff type="json" inputA={"{\"a:\"\"b\"}"} inputB={"{\"a:\"\"c\"}"} />
    </div>
  );
}

render(<Demo />, document.getElementById("app"));
