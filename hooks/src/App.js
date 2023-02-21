import "./App.css";
// import NewSongForm from "./components/newSongForm";
// import { useState } from "react";
// import Counter1 from "./components/Counter1";
// import Select from "./components/Select";
import SongList from "./components/SongList.jsx";
function App() {
  // const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Counter />
      {show ? <Counter1 /> : null}
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button> */}
      <SongList />
    </div>
  );
}

export default App;
