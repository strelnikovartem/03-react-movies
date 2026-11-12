import { useState, useEffect } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  return <button onClick={() => setClicks(clicks + 1)}>You clicked {clicks} times</button>;
}
