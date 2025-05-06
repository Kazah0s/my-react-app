import { useSelector } from "react-redux";
import { RootState } from "../app/Store/store";
import React, { useState, useRef, useEffect } from "react";
import Registration from '../features/register/Registration';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const currentUser = useSelector((state: RootState) => state.user)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLogout = () => {


        console.log("User logged out");
        setIsMenuOpen(false);
    };

    const goToUserAds = () => {
        navigate('/my-ads');
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
            {/* <img src="" alt="logo" className="header-logo" /> */}
            <div className="headerBtnBlock">
                <Registration />
                <div className="userBlock" ref={menuRef}>
                    <p
                        className="userName"
                        onClick={toggleMenu}
                        style={{ cursor: 'pointer' }}
                    >
                        {currentUser.username ? currentUser.username : "UserName"}
                    </p>

                    {isMenuOpen && (
                        <div className="userMenu">
                            <div className="menuHeader">
                                <span className="menuUserName">{currentUser.username ? currentUser.username : "User"}</span>
                            </div>
                            <button
                                className="menuButton"
                                onClick={goToUserAds}
                            >
                                Мои объявления
                            </button>
                            <button
                                className="menuButton logoutButton"
                                onClick={handleLogout}
                            >
                                Выйти
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Header;