import { useEffect, useState } from "react";
import Home from "../src/components/Home/Home";
import RegisterModal from "./components/Register/RegisterModal";
import "./App.css";
function App() {
  const [isOpenRegisterModal, setIsOpenRegisterModal] = useState(false);
  useEffect(() => {
    const interval = setTimeout(() => {
      setIsOpenRegisterModal(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="App">
      <Home />
      {isOpenRegisterModal && (
        <RegisterModal setIsOpenRegisterModal={setIsOpenRegisterModal} />
      )}
    </div>
  );
}

export default App;
