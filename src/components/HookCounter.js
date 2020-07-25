import React, { useState, useEffect } from "react";
function HookCounter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState({ firstname: "", lastName: "" });
  const [tag, setDisplay] = useState(true);
  //   const incrementval = () => {
  //     setCount(count + 1);
  //   };
  useEffect(() => {
    setInterval(function () {
      setCount(count + 1);
    }, 3000);
    console.log("Fired", tag);
    // console.log("count clicked", count);
  }, []);
  return (
    <div>
      <h1>making counter</h1>
      <input
        name="firstname"
        onChange={(e) => {
          setName({ ...name, firstname: e.target.value });
        }}
        value={name.firstname}
      />
      <input
        name="lastName"
        onChange={(e) => {
          setName({ ...name, lastName: e.target.value });
        }}
        value={name.lastName}
      />
      <h3>{name.lastName}</h3>
      <h3>{name.firstname}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button onClick={() => setDisplay(!tag)}>turn status</button>
      <h1>{tag}</h1>
    </div>
  );
}
export default HookCounter;
