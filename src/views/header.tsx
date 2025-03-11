import React from "react";
import Registration from '../features/register/Registration';

const Header = () => {

    return (
        <div className="header">
            <img src="" alt="logo" />
            <div className="headerButtBlock">
            <div className="userBlock">
                    <Registration />
                    <img src="" alt="Иконка" />
                    Kazah
                </div>
            </div>
        </div>
    )
}

export default Header;