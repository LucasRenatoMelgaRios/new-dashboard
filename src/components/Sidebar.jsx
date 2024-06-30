import styled from "styled-components"
import { FaPerson } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa6";
import { FaTruckField } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";
import { VscSymbolField } from "react-icons/vsc";
import { FaChartLine } from 'react-icons/fa';
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

import { useState } from "react";


export const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

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
            icon: <FaChartLine />,
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
        <>
         <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </ToggleButton>
            <SideBarContainer isOpen={isOpen}>
                {DataItems.map((item) => (
                    <NavItem key={item.id} href={item.path}>
                        {item.icon}
                        <span>{item.name}</span>
                    </NavItem>
                ))}
            </SideBarContainer>
        </>
    );
};

const ToggleButton = styled.button`
    position: fixed;
    top: 20px;
    left: ${(props) => (props.isOpen ? '200px' : '20px')};
    background-color: #0a3c4b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    z-index: 1000;
    transition: left 0.3s ease-in-out;

    &:hover {
        background-color: #135669;
    }

    svg {
        font-size: 20px;
    }
`;

const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: ${(props) => (props.isOpen ? '0' : '-250px')};
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 150px;
    height: 100vh;
    background-color: #0a3c4b;
    color: #fff;
    padding: 20px;
    transition: left 0.3s ease-in-out;
    z-index: 999;
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
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


