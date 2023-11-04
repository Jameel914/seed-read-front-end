import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPage from "./Components/EditPage";
import IndexPage from "./Components/IndexPage";
import Navbar from "./Components/Navbar";
import NewPage from "./Components/NewPage";
import ShowPage from "./Components/ShowPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/songs" element={<IndexPage />} />
        <Route path="/songs/new" element={<NewPage />} />
        <Route path="/songs/:id" element={<ShowPage />} />
        <Route path="/songs/:id/edit" element={<EditPage />} />
      </Routes>
    </Router>
  );
}

export default App;
