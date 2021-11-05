import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <>
      <ToastContainer />
      <Main />
      <Footer />
    </>
  );
}

export default App;
