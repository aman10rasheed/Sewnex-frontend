import { useState } from "react";
import Button from "./components/Ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-blue-500">hai</div>
      <Button size={"sm"} text="Button"/>
      <Button size={"md"} text="Button"/>
      <Button size={"lg"} text="Buttom"/>
    </>
  );
}

export default App;
