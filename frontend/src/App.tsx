import "./App.css";
import DefaultPage from "./components/DefaultPage";
import { ToastContainer } from 'react-toastify';
function App() {
  return(
    <>
    <DefaultPage />;
    <ToastContainer />
    </>
  ) 
}

export default App;
