# In develop

this package still in develop stage. This package is using intersectionObserver API for aysnc view detect.

# Usage

## `useVisible` hook

```js
const flag = useVisible(domNode, threshold);
// this domNode visible in screen at at what percentage of the domNode visibility
```

Please using useState for DOM element, like react-popper.

```js
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
