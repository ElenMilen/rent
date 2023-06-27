import './App.css';
import SelectedHouse from "./components/selectedHouse/SelectedHouse";
import { Routes, Route } from "react-router-dom";
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/selected/:id" element={<SelectedHouse />} />
        {/* <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;