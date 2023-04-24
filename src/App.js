import Pages from "./pages/Pages"
import './index.css';
import Categorise from "./components/Categorise";
import { BrowserRouter } from "react-router-dom";
import Input from "./components/Input";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Input/>
        <Categorise />
        <Pages />
      </BrowserRouter>

    </div>
  )
}

export default App

