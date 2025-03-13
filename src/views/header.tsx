import React from "react";
import Registration from '../features/register/Registration';

const Header = () => {

    return (
        <div className="header">
            <img src="" alt="logo" />
            <div className="headerBtnBlock">
                <Registration />
                <div className="userBlock">
                    UserName
                </div>
            </div>
        </div>
    )
}

export default Header;