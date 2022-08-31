import { Routes, Route } from "react-router-dom";
import { Home } from "../components/Home";
import { NavBar } from "../components/NavBar";
import { TarjetasDc } from "../components/TarjetasDc";
import { TarjetasMarvel } from "../components/TarjetasMarvel";


export const AppNavigate = () => {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="dc" element={<TarjetasDc />} />
        <Route path="marvel" element={<TarjetasMarvel />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}