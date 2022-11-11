import './App.css';
import SortingVisualizer from "./components/SortingVisualizer/sortingVisualizer";
import Banner from "./components/Banner/Banner.js"

function App() {
  return (
    <div className="App">
      <Banner className="banner"></Banner>
      <SortingVisualizer className="sortingVisualizer"></SortingVisualizer>
    </div>
  );
}

export default App;
