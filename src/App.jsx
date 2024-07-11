import { useEffect, useState } from "react";
import "./App.css";
import Notification from "./components/Notifications";
import SuperLeague from "./components/SuperLeague";
import Techonlogy from "./components/Techonlogy";
import Counter from "./components/Counter";
import ConditionalRender from "./components/ConditionalRender";

function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <div>this is my App now</div>
      {/* <SuperLeague />
      <Notification /> */}
      {/* <Techonlogy /> */}
      {/* <Counter /> */}
      <ConditionalRender />
    </>
  );
}

export default App;
