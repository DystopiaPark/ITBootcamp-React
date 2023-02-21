import "./App.css";
import SongList from "./Components/SongList";
import ThemeToggle from "./Components/ThemeToggle";
import SongContextProvider from "./Context/SongContext";
import ThemeContextProvider from "./Context/ThemeContext";

function App() {
  return (
    <div className="App">
      <h1>useContext</h1>
      <ThemeContextProvider>
        <ThemeToggle />

        <SongContextProvider>
          <SongList />
        </SongContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
