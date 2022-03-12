const { useState, useEffect } = require("react");

function SignUp() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(true); // true -assuming the email is invalid

  let borderColor = "green";
  if (error) {
    borderColor = "red";
  }

  function handleChange(event) {
    setEmail(event.target.value);
  }

  useEffect(
    function () {
      let isEmailValid = email.includes("@");
      setError(!isEmailValid);
      //   If the email is invalid, the error should be true
    },
    [email]
  );

  return (
    <form>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={handleChange}
        style={{
          border: `2px solid ${borderColor}`,
        }}
      />
      <input type="submit" value="Sign Up" />
    </form>
  );
}

module.exports = SignUp;
