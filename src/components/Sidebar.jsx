import styled from "styled-components"
import { FaPerson } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import { FaTruckField } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { VscSymbolField } from "react-icons/vsc";
import { FaChartLine } from 'react-icons/fa';

import { Link } from "react-router-dom";


export const SideBar = () => {

    const DataItems = [
        {
            id: 1,
            name: "Personal",
            icon: <FaPerson />,
            path: "/personal"
        },
        {
            id: 2,
            name: "Productos",
            icon: <FaBoxOpen />,
            path: "/productos"
        },
        {
            id: 3,
            name: "Proveedores",
            icon: <FaTruckField />,
            path: "/proveedores"
        },
        {
            id: 4,
            name: "Ventas",
            icon: <FaCoins />,
            path: "/ventas"
        },
        {
            id: 5,
            name: "Lotes",
            icon: <VscSymbolField />,
            path: "/lotes"
        },
        {
            id: 6,
            name: "Balance",
            icon: <FaChartLine  />,
            path: "/balance"
        },
        {
            id: 7,
            name: "Usuarios",
            icon: <FaUser />,
            path: "/usuarios"
        },
        
    ];

    return (
        <SideBarContainer>
            
            {DataItems.map((item) => (
                <NavItem key={item.id} href={item.path}>
                    {item.icon}
                    <span>{item.name}</span>
                </NavItem>
            ))}
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    position: fixed;
    display: flex;
    height: 70vh;
    min-width: 120px;
    background-color: #0a3c4b;
    flex-direction: column;
    gap: 10px;
    left: 0;
    color: #fff;
    margin-top: 150px;
    padding: 10px;
    border-radius: 0px 20px 20px 0px;
`;

const NavItem = styled.a`
    display: flex;
    align-items: center;
    padding: 10px;
    gap: 10px;
    text-decoration: none;
    color: inherit;

    &:hover {
        background-color: #135669;
    }

    svg {
        font-size: 18px;
    }

    span {
        font-size: 14px;
    }
`;




