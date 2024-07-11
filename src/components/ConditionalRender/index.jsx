import { useState } from "react";

const ConditionalRender = () => {
  const [isSubscribe, setIsSubscribe] = useState(false);

  const handleSubscribe = () => {
    setIsSubscribe(!isSubscribe);
  };
  //  conditon ? "excutes if condtion is true" : "Executes condition is false"
  return (
    <div>
      <h2> Welcome</h2>
      {isSubscribe ? (
        <button onClick={handleSubscribe}>subscribedddddddddd</button>
      ) : (
        <button onClick={handleSubscribe}>subscribe</button>
      )}

      {isSubscribe && <p>Thanks for Subscrbinggg</p>}
    </div>
  );
};

export default ConditionalRender;
