import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import SamuraiCell from "./SamuraiCell";

function App() {
  return (
    <div>
      <ToastContainer />
      <h1>Hello world</h1>

      <SamuraiCell variables={{ limit: 4, offset: 2 }} />
    </div>
  );
}

export default App;
