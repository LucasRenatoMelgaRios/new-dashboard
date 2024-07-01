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
import { AuthProvider } from "../context/AuthContext";
import { PrivateRoute } from "../components/PrivateRoute";

export const MyRoutes = () => {
    console.log('Rendering MyRoutes');

    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<LoginPage />} />
                    <Route path="/personal" element={<PrivateRoute><PersonalPage /></PrivateRoute>} />
                    <Route path="/productos" element={<PrivateRoute><ProductosPage /></PrivateRoute>} />
                    <Route path="/proveedores" element={<PrivateRoute><ProveedoresPage /></PrivateRoute>} />
                    <Route path="/ventas" element={<PrivateRoute><VentasPage /></PrivateRoute>} />
                    <Route path="/lotes" element={<PrivateRoute><LotesPage /></PrivateRoute>} />
                    <Route path="/balance" element={<PrivateRoute><BalancePage /></PrivateRoute>} />
                    <Route path="/usuarios" element={<PrivateRoute><UsuariosPage /></PrivateRoute>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
