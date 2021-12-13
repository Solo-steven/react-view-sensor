# In develop

this package still in develop stage. This package is using intersectionObserver API for aysnc view detect.

# Usage

## `useVisible` hook

```js
const flag = useVisible(domNode, threshold);
// this domNode visible in screen at at what percentage of the domNode visibility
```

Please using useState for DOM element, like react-popper.

```jsx
const App = () => {
  const [dom, setDOM] = useState(null);
  const flag = useVisible(dom);
  return (
    <div ref={setDOM}>
      {
        //....
      }
    </div>
  );
};
```

## Example: Infinite Scroll

`useVisible`hook can detect that Is last element visible in view by return flag.

```jsx
import React, { useState, useEffect } from "react";
import { useVisible } from "react-view-sensor";

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
};

const App = () => {
  const [dom, setDOM] = useState(null);
  const [num, setNum] = useState([0, 1, 2, 3, 4, 5]);
  const flag = useVisible(dom);
  useEffect(() => {
    console.log("Flag Change to ", flag);
  }, [flag]);

  return (
    <div>
      <div style={wrapper}>
        {num.map((index) => {
          if (index === num.length - 1)
            return (
              <div
                style={inner}
                ref={setDOM}
                key={index}
              >{`Test Block ${index}`}</div>
            );
          return <div style={inner} key={index}>{`Test Block ${index}`}</div>;
        })}
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
          Add
        </button>
      </div>
    </div>
  );
};
```
