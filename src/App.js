import "./App.css";
import Index from "./components/Index";
import { NavBar, NavBarTitle } from "./components/Styled";

function App() {
  return (
    <div>
      <>
        <NavBar>
          <NavBarTitle>Portfolio</NavBarTitle>
        </NavBar>
      </>
      <Index />
    </div>
  );
}

export default App;
