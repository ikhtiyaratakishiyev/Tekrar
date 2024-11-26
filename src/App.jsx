import { useState } from "react";
import Increment from "./Components/Increment";
import Form from "./Components/Form";
import Todos from "./Components/Todos";

function App() {
  const [show, setShow] = useState(false);

  const [number, setNumber] = useState(0);

  const [arr, setArr] = useState([]);

  const [value, setValue] = useState("");


console.log(arr);

  const Submit = (e) => {

    e.preventDefault();
    setArr([...arr, value])
    setValue("")
  };

  return (
    <div className="h-[100vh] flex justify-center gap-5 flex-col items-center ">
      <button
        className=" bg-red-700 h-20 w-40 rounded-md"
        onClick={() => setShow(!show)}
      >
        {show ? "Gizlet" : "Goster"}
      </button>
      {show && <Increment number={number} setNumber={setNumber} />}
      <Form Submit={Submit} setValue={setValue} value={value} />
      <Todos arr={arr}/>
    </div>

    // button
  );
}

export default App;
