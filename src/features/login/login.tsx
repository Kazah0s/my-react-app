import React, { useState, useEffect, FormEventHandler } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLoginRequest } from '../login/slice';
import { RootState } from '../../app/Store/store';
// import Login from '../app/components/login';


const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  // const {username, loading} = useSelector((state: RootState) => state.register);

  const handleButtonClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerData = {
      username: username,
      password: password
    };
    dispatch(fetchLoginRequest(registerData));
  }

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isModalOpen]);


  return (
    <div className="registration-container">
      <button
        onClick={() => setIsModalOpen(true)}
        className="menuButton registerButton"
      >
        Войти
      </button>

      {isModalOpen && (
        <div className="registration-overlay">
          <div className="registration-modal">
            <button
              className="registration-close-button"
              onClick={handleCloseModal}
            >
              &times;
            </button>

            <h2 className="registration-title">Авторизация</h2>

            <form onSubmit={handleButtonClick} className="registration-form">
              <div className="registration-form-group">
                <label className="registration-label">Логин:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="registration-input"
                  required
                />
              </div>

              <div className="registration-form-group">
                <label className="registration-label">Пароль:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="registration-input"
                  required
                />
              </div>

              <div className="registration-button-group">
                <button
                  className="registration-cancel-button"
                  type="button"
                  onClick={handleCloseModal}
                >
                  Закрыть
                </button>
                <button
                  className="registration-submit-button"
                  type="submit"
                >
                  Авторизоваться
                </button>

              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;