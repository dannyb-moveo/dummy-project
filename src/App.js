import logo from "./logo.svg";
import "./App.css";
import { Suspense, lazy, useState } from "react";
// import LazyComponent from "./components/LazyComponent/LazyComponent";

const LazyComponent = lazy(() =>
  import("./components/LazyComponent/LazyComponent")
);

function App() {
  const [componentLoaded, setComponentLoaded] = useState(false);

  const handleClick = () => {
    setComponentLoaded(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <button onClick={handleClick}>Load LazyComponent</button>

      <Suspense
        fallback={
          <div style={{ height: "200px", width: "200px" }}>Loading...</div>
        }
      >
        {<LazyComponent />}
      </Suspense>
      {/* <LazyComponent /> */}
    </div>
  );
}

export default App;
