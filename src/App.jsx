import { useState } from "react";
import Button from "./components/Ui/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="text-blue-500">hai</div>
      <Button size={"sm"} />
      <Button size={"md"} />
      <Button size={"lg"} />
    </>
  );
}

export default App;
