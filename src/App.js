import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./components/hooks/useTelegram";

const { tg, onToggleButton } = useTelegram();

function App() {
  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
