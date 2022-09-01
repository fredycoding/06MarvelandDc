import { Routes, Route } from "react-router-dom";
import { HeroeDetalle } from "../components/HeroeDetalle";
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
        <Route path="heroe/:id" element={<HeroeDetalle />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}