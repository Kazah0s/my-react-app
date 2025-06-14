import { useSelector } from "react-redux";
import { RootState } from "../app/Store/store";
import React, { useState, useRef, useEffect } from "react";
import Registration from '../features/register/Registration';
import Login from "../features/login/login";
import { useNavigate } from 'react-router-dom';
// import LogoKCT from '../assets/LogoKCT.png'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    const currentUser = useSelector((state: RootState) => state.user)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        location.reload();

        console.log("User logged out");
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="header">
            <img src="https://it-college.ru/images/Logo5.png" alt="logo" className="header-logo" />
            <div className="headerBtnBlock">

                <div className="userBlock" ref={menuRef}>
                    <p
                        className="userName"
                        onClick={toggleMenu}
                        style={{ cursor: 'pointer' }}
                    >
                        {currentUser.username ? currentUser.username : "Меню"}
                    </p>

                    {isMenuOpen && (
                        <div className="userMenu">

                            <div className="menuHeader">
                                <span className="menuUserName">{currentUser.username ? currentUser.username : "UserName"}</span>
                            </div>

                            {currentUser.username
                                ? <button className="menuButton logoutButton" onClick={handleLogout}> Выйти </button>
                                : <><Registration /> <Login /></>
                            }
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;