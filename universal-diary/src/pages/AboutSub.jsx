import { useState } from "react";

const products = [
  { title: "title1", id: 1 },
  { title: "title2", id: 3 },
];

const listItems = products.map((p) => <li key={p.id}>{p.title}</li>);

function AboutSub() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("handleClick " + count);
  }

  return (
    <>
      <div> About Sub</div>
      <div>{listItems}</div>
      <button onClick={handleClick}>Click for {count} times</button>
    </>
  );
}

export default AboutSub;
