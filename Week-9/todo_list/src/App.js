import "./App.css";
import * as Sentry from "@sentry/react";

import Todo from "./Todo/Todo";
import ShortUrl from "./ShortenUrl/ShortUrl";
import Counter from "./Counter/StepsCounter.js";
import LightStatus from "./LightStatus/LightStatus";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Test from "./Test";

function App() {
  return (
    <div className="App">
      <button
        type="button"
        onClick={() => {
          throw Error("Oops, Something went wrong");
        }}
      >
        Do not Clickon this button - Sentry
      </button>
      <Tabs
        defaultActiveKey="todo"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="todo" title="To Do List">
          <label>Assignment-1</label>
          <Todo />
        </Tab>
        <Tab eventKey="url" title="Shorten Url">
        <label>Assignment-2</label>
          <ShortUrl />
        </Tab>
        <Tab eventKey="Light" title="Light Status(Redux)" >
        <label>Assignment-3.1</label>
          <LightStatus />
        </Tab>
        <Tab eventKey="Step" title="Add a Step(Redux)" >
        <label>Assignment-3.2</label>
          <Counter />

        </Tab>
        <Tab eventKey="tets" title="test">
        <Test />
        </Tab>
      </Tabs>
    </div>
  );
}

// export default App;

export default Sentry.withProfiler(App);
