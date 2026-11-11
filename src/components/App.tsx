import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log("Effect ran!");
    axios
      // 1. Використовуємо count в ефекті
      .get(`https://swapi.info/api/people/${count}`)
      .then((response) => setPerson(response.data));
  }, [count]); // 2. Додаємо count в залежності ефекта

  console.log("App rendered!");

  return (
    <>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(count + 1)}>Get next character</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
