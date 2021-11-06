import { BrowserRouter } from "react-router-dom";

import Navigation from "./utils/Navigation";
import Routes from "./utils/Routes";

import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
