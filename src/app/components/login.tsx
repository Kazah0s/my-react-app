import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../Store/store";

export interface LoginProps {
  username?: string; // Делаем пропс необязательным
}

const Login: React.FC<LoginProps> = ({ username }) => {
  const currentUser = useSelector((state: RootState) => state.user);
  const [displayName, setDisplayName] = useState<string>(username || ''); // Инициализируем значением из пропсов или пустой строкой

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.username || currentUser.toString());
    } else if (username) {
      setDisplayName(username);
    } else {
      setDisplayName('Войти');
    }
  }, [currentUser, username]);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  return (
    <>
      <div
        className="userBlock"
        onClick={() => setIsModalOpen(true)}
      >
        <p>{displayName}</p>
      </div>
    </>
  );
};

export default Login;