import React from "react";
import { NavLink, useLocation } from "react-router-dom";

//design
import { Menu } from "antd";
const { SubMenu } = Menu;

export const SideBar = () => {
    const { pathname } = useLocation();
    const page = pathname.replace("/", "");

    return (
        <div className="sidebar">
        <Menu theme="light" mode="inline">
            <Menu.Item key="1">
                <NavLink to="/">
                <span className="label">Home</span>
                </NavLink>
            </Menu.Item>
            <SubMenu key="sub1" title="Navigation One">
            <Menu.ItemGroup key="g1" title="Item 1">
                <Menu.Item key="19">Option 1</Menu.Item>
                <Menu.Item key="29">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Item 2">
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </Menu.ItemGroup>
            </SubMenu>
        </Menu>
      </div>
    )
}