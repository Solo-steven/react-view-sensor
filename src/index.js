import ReactDOM from "react-dom";
import React, { useState } from "react";
import { useVisible } from "./useVisible";

const wrapper = {
  border: "1px solid #949494",
  width: "500px",
  height: "400px",
  overflowY: "auto",
};
const inner = {
  height: "100px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderBottom: "1px solid #949494",
};

const App = () => {
  const [num, setNum] = useState([0, 1, 2, 3, 4, 5]);
  const [flag, dom] = useVisible(0.55);
  return (
    <div>
      <div style={wrapper}>
        {num.map((index) => (
          <div
            style={inner}
            key={index}
            ref={index === num.length - 1 ? dom : undefined}
          >{`Test Block ${index}`}</div>
        ))}
      </div>
      <div>
        <button
          onClick={() => {
            setNum((pre) => {
              const len = pre.length;
              return [...pre, len, len + 1, len + 2, len + 3, len + 4];
            });
          }}
        >
          Add Element
        </button>
      </div>
      <div>
          {`Last Element shows up: ${flag}`}
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'))