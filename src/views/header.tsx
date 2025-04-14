import React from "react";
import Registration from '../features/register/Registration';
import { current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "../app/Store/store";

const Header = () => {
    const currentUser = useSelector((state: RootState) => state.user)


    return (
        <div className="header">
            <img src="" alt="logo" />
            <div className="headerBtnBlock">
                <Registration />
                <div className="userBlock">
                    {currentUser.username ? currentUser.username : "UserName"}
                </div>
            </div>
        </div>
    )
}

export default Header;