const elementRef = useRef();

function handleClick() {
  const div = elementRef.current
  console.log("Measurements: ", div.getBoundingClientRect());
}

return (
  <div>
    <h1 ref={elementRef}>Box</h1>
    <button onClick={handleClick}>Measure</button>
  </div>
);