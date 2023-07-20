import "./App.css";
import DefaultPage from "./components/DefaultPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SuccessPage from "./components/SucessPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DefaultPage />} />
          <Route path="/Success" element={<SuccessPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
