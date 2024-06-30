import styled from "styled-components";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/Logeo/LoginPage";
import { PersonalPage } from "../pages/PersonalPage";
import { ProductosPage } from "../pages/ProductosPage";
import { ProveedoresPage } from "../pages/ProveedoresPage";
import { VentasPage } from "../pages/VentasPage";
import { LotesPage } from "../pages/LotesPage";
import { BalancePage } from "../pages/BalancePage";
import { UsuariosPage } from "../pages/UsuariosPage";

export const MyRoutes = () =>{

    return(
        <>
            <BrowserRouter>
            <Routes>
                <Route path="/" element = {<LoginPage/>} />
                <Route path="/personal" element = {<PersonalPage/>} />
                <Route path="/productos" element = {<ProductosPage/>} />
                <Route path="/proveedores" element = {<ProveedoresPage/>} />
                <Route path="/ventas" element = {<VentasPage/>} />
                <Route path="/lotes" element = {<LotesPage/>} />
                <Route path="/balance" element = {<BalancePage/>} />
                <Route path="/usuarios" element = {<UsuariosPage/>} />
            </Routes>
            </BrowserRouter>
        </>
    )
}