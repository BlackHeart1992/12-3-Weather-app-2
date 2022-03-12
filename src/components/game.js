const { useState, useEffect } = require("react");

function Game() {
  const [mouseMoves, setMouseMoves] = useState(0);

  useEffect(function () {
    //   Great place to fetch initial data
    console.log("This will only run once when the component is first rendered");
  }, []);

  useEffect(function () {
    //   This will run whenever any state changes
    console.log("Will run every time the component is rendered");
  });

  function handleMouseMove() {
    setMouseMoves(mouseMoves + 1);
  }

  return (
    <div>
      <h3 onMouseMove={handleMouseMove}>Move your mouse over me!</h3>
      <h4>You have moved the mouse {mouseMoves} times</h4>
    </div>
  );
}

module.exports = Game;
