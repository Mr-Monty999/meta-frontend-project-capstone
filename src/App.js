import "./App.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";
// import "normalize.css"
import "./assets/css/all.min.css";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
