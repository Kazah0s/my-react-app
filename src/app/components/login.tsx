import React, { useState } from "react";

export interface LoginProps {
  username: string;
  password: string;
}

const Login: React.FC<LoginProps> = ({
  username = 'user',
  password = "user"
}) => {

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);


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
        <p>{username}</p>
      </div>
    </>
  )




}