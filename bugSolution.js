```javascript
// pages/index.js
export default function Home() {
  const [showComponent, setShowComponent] = React.useState(true);

  return (
    <div>
      <h1>Hello, world!</h1>
      {showComponent && <MyComponent/>}
      <button onClick={() => setShowComponent(!showComponent)}>
        {showComponent ? 'Unmount' : 'Mount'}
      </button>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('MyComponent mounted');
    return () => {
      console.log('MyComponent unmounted');
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```