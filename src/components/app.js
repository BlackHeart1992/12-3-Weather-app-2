const { BrowserRouter, Switch } = require("react-router-dom");
// Always import packages at the top and requires beneath
const Nav = require("./nav");
const Game = require("./game");
const Clock = require("./clock");
const SignUp = require("./signup");
const Home = require("./home");
const About = require("./about");

function App() {
  let pageTitle = "Our React Weather App";
  return (
    <BrowserRouter>
      <Nav title={pageTitle} />
      <Switch>
        <Home />
        <About />
        <SignUp />
        <Clock />
        <Game />
      </Switch>
    </BrowserRouter>
  );
}
// Render all the components within the function
// Anything inside the switch will be conditionally be shown
module.exports = App;
