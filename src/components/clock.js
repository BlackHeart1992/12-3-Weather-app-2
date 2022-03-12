const { useState, useEffect } = require("react");

function Clock() {
  const [time, setTime] = useState(0);

  useEffect(
    function () {
      setTimeout(function () {
        setTime(time + 1);
      }, 1000);
    },
    [time]
  );

  return (
    <div>
      <h2>You have been on the page for {time} seconds</h2>
    </div>
  );
}

module.exports = Clock;
