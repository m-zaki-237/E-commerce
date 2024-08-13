import Home from "./main/Home";
import { Route, Routes } from "react-router-dom"
import Prod from "./product/Prod";
import Signup from "./components/Signup";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<Prod/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  );
}

export default App;
