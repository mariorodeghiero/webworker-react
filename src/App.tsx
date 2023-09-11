import { useState } from "react";
import "./App.css";
import { workerInstance, runBigCalcAsync } from "./utils/utils";
import Image from "./assets/webwoker.png";
function App() {
  const [result, setResult] = useState<any>(null);
  const [isPending, setIsPending] = useState(false);

  const workerThreadCall = async () => {
    setResult(null);

    const workerResponse = await workerInstance.myRPCFunc(53000000);
    setResult(`Worker ${workerResponse}`);
    handleIsPending(false);
  };

  const mainThreadCall = async () => {
    setResult(null);
    const asyncResponse = await runBigCalcAsync(53000000);
    setResult(`Main Thread ${asyncResponse}`);
    handleIsPending(false);
  };

  const handleIsPending = (value: boolean) => {
    setIsPending(value);
  };

  return (
    <div>
      <div className="header">
        <h1>What is the main thread?</h1>{" "}
        <p>
          The main thread is where most tasks are running in the browser. It's
          called the main thread for a reason: it runs all the JavaScript that
          we write.
        </p>
        <p>
          {" "}
          The main thread can only process one task at a time. When tasks pass
          50 milliseconds is classified as long task. If the user tries to
          interact with the page while a long task runs or if an important
          rendering update needs to happen the browser will be delayed to handle
          that work. This results in interaction or rendering latency.
        </p>
        <img src={Image} alt="web worker" />
      </div>
      <button
        onClick={() => {
          handleIsPending(true);
          workerThreadCall();
        }}
      >
        Worker Thread
      </button>
      <button
        onClick={() => {
          handleIsPending(true);
          mainThreadCall();
        }}
      >
        Main Thread
      </button>
      <div className="container">
        <div className="thread">
          <form>
            <label>Name: </label>
            <input type="text" name="name" />
            <br />
            <br />
            <label>Age: </label>
            <input type="text" name="age" />
            <br />
            <br />
            <label>Address: </label>
            <input type="text" name="address" />
            <br />
            <br />
            <label>Phone: </label>
            <input type="text" name="phone" />
            <br />
            <br />
            <input type="submit" value="Submit" />
          </form>
        </div>
        <div className="result">
          {isPending && <p>The calculation is in process...</p>}
          {result && <p>Result: {result}</p>}
        </div>
      </div>
      <div className="info-container">
        <h2>When to use web workers with react Web Workers?</h2>
        <p>
          Are particularly beneficial in scenarios where you need to perform
          computationally intensive tasks that could potentially block the main
          thread of the web application.
        </p>
        <h3>Some cases </h3>
        <li> Heavy Computation</li>
        <li> Image and Video Processing</li>
        <li>Intensive Animations</li>
        <li> Data Processing</li>
        <li> Background Tasks</li>
        <li> Parallel Network Requests</li>
      </div>
    </div>
  );
}

export default App;
