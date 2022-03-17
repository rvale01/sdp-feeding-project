import React from "react";

import { SideBar } from './SideBar'

export const Container =({ children })  =>{
    if(sessionStorage.getItem("sessionId")){
        return (
            <div className="sider">
                <SideBar />
                <div className="content">
                    {children}
                </div>
            </div>
        );
    }else{
        return children
    }
}
  
  