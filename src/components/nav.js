const { Link } = require("react-router-dom");

function Nav({ title }) {
  return (
    <header>
      <h1>{title}</h1>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </header>
  );
}

module.exports = Nav;
