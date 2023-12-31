import Comments from "./Comments";
import Counter from "./Counter";

function App() {


  return (
    <div className="App">
      <h1>Redux DOM Challenge</h1>
      <Counter paused={paused} togglePaused={togglePaused} />
      <hr />
      <Comments />
    </div>
  );
}

export default App;
