import "./App.css";

import FaqItem from "./FaqItem";

function App() {
  return (
    <div className="App">
      <main>
        <h1>CCT Lab Process</h1>
        <FaqItem
          mainText="Build test task"
          list={[
            "Create repository",
            "Implement designs",
            "Implement functionality",
          ]}
        ></FaqItem>
        <FaqItem
          mainText="Submit your test task"
          list={[
            "Open email client",
            "Sent link with information to careers@cornercasetech.com"
          ]}
        ></FaqItem>
        <FaqItem
          mainText="Participate in tech interview"
          list={["Talk with HR", "Talk with Tech team"]}
        ></FaqItem>
        <FaqItem
          mainText="Receive answer"
          list={["Receive answers", "Start your IT career"]}
        ></FaqItem>
      </main>
    </div>
  );
}

export default App;
