import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log("Effect ran!");
    axios.get("https://swapi.info/api/people/1").then((response) => setPerson(response.data));
  }, []);

  console.log("App rendred!");

  return (
    <>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
