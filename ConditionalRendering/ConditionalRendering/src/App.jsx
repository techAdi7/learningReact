import React from "react";

function App() {
  let healthyItems = [
    "Dal",
    "Fruits",
    "Milk",
    "Fish",
    "Roti",
    "Ghee",
    "Salad",
    "Vegetables",
  ];

  // let healthyItems = [];

  // conditional rendering

  // 1. using if statement

  // if (healthyItems.length === 0) {
  //   return <p>Hey, I am in</p>;
  // }

  return (
    <>
      <h1>Healthy Food Items:-</h1>
      <ul className="list-group">
        {/* Use of .map() method here to render or use as an alternate for the loop in .jsx file.*/}

        {healthyItems.map((i) => (
          <li key={i} className="list-group-item">
            {i}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
