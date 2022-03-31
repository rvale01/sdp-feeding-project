import React from "react";
import { NavLink, useLocation } from "react-router-dom";

//design
import { Menu, Card } from "antd";
const { SubMenu } = Menu;

export const SideBar = () => {
    const { pathname } = useLocation();
    return (
        <div className="sidebar">
        <Menu theme="light" mode="inline" className="menu">
            <Menu.Item key="1" className={pathname === "/" ? 'ant-menu-item-selected' : null}>
                <NavLink to="/">
                    <span className="label">Home</span>
                </NavLink>
            </Menu.Item>

            <Menu.Item key="2" className={pathname.includes("patients") ? 'ant-menu-item-selected' : null}>
                <NavLink to="/patients-list">
                    <span className="label">Patients</span>
                </NavLink>
            </Menu.Item>

            <Menu.Item key="3" className={pathname === "/upload-data" ? 'ant-menu-item-selected' : null}>
                <NavLink to="/upload-data">
                    <span className="label">Upload Data</span>
                </NavLink>
            </Menu.Item>
            {/* <SubMenu key="sub1" title="Patients">
                <Menu.ItemGroup key="g1" title="Item 1">
                    <Menu.Item key="19">Option 1</Menu.Item>
                    <Menu.Item key="29">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup key="g2" title="Item 2">
                    <Menu.Item key="3">Option 3</Menu.Item>
                    <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu> */}
        </Menu>
      </div>
    )
}