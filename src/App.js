import { UseReducer } from "./UseReducer";
import { UseState } from "./UseState";
import "./App.css";

function App() {
  return (
    <div className="App">
      <UseState name="UseStae" />
      <UseReducer name="Use Reducer" />
    </div>
  );
}

export default App;
