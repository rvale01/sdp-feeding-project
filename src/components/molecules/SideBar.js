import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

//design
import { Menu, Card } from "antd";
import { useDispatch } from "react-redux";
import { getRole } from "../../pages/login/slice";
const { SubMenu } = Menu;

export const SideBar = () => {
    const { pathname } = useLocation();
    const [path, setPath] = useState()
    const dispatch = useDispatch()
    const [role, setRole] = useState()
    useEffect(()=>{
        if(localStorage.getItem('role')){
            setRole(localStorage.getItem('role'))
        }
    }, [])

    useEffect(()=>{
        setPath(pathname)
    }, [pathname])

    const handleLogout = () => {
        localStorage.removeItem('role')
        sessionStorage.removeItem('sessionId')
        window.location.reload();
    }

    return (
        <div className="sidebar">
        <Menu theme="light" mode="inline" className="menu">
            <Menu.Item key="1" >
                <NavLink to="/">
                    <span className="label">Home</span>
                </NavLink>
            </Menu.Item>

            <Menu.Item key="2">
                <NavLink to="/patients-list">
                    <span className="label">Patients</span>
                </NavLink>
            </Menu.Item>

            {role && role.toLowerCase() === 'admin' ?
                <Menu.Item key="3" >
                    <NavLink to="/upload-data">
                        <span className="label">Upload Data</span>
                    </NavLink>
                </Menu.Item>
            : null }

            {role && role.toLowerCase() === 'admin' ?
                <Menu.Item key="4" >
                    <NavLink to="/add-patient">
                        <span className="label">Add Patient</span>
                    </NavLink>
                </Menu.Item>
            : null }

            {role && role.toLowerCase() === 'admin' ?
                <Menu.Item key="5" >
                    <NavLink to="/users">
                        <span className="label">Users</span>
                    </NavLink>
                </Menu.Item>
            : null }

            {role && role.toLowerCase() === 'admin' ?
                <Menu.Item key="6" className={null}>
                    <NavLink to="/rooms">
                        <span className="label">Rooms</span>
                    </NavLink>
                </Menu.Item>
            : null }

            <Menu.Item key="7" onClick={handleLogout}>
                <span className="label">Logout</span>
            </Menu.Item>
        </Menu>
      </div>
    )
}