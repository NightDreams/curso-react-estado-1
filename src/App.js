import { ClasState } from "./ClasState";
import { UseState } from "./UseState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="UseStae" />
      <ClasState name="ClassState" />
    </div>
  );
}

export default App;
