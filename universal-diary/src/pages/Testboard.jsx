import { useBeforeUnload } from "react-router-dom";
import { useCallback, useState, useEffect, useContext } from "react";
import { ExampleContext } from "../App";

function Testboard({ userNumber }) {
  const [old, setOld] = useState("old");
  console.log("Testboard before unload" + userNumber);

  //const valueFromExampleContext = useContext(ExampleContext);

  //const { items, setItems } = useContext(ExampleContext2);

  //setItems("New text from Testboard");

  return (
    <>
      <div>Testboard {userNumber}..valueFromExampleContext:</div>
      <div>{old}</div>
      <button onClick={() => setOld("setOld thru button")}>
        set text set old thru button
      </button>
    </>
  );
}

export default Testboard;
