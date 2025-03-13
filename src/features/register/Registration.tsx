import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterRequest } from './slice';
import { RootState } from '../../app/Store/store';


const Registration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.register.data)

  const handleButtonClick = () => {
    const registerData = {
      username: username,
      password: password
    };
    dispatch(fetchRegisterRequest(registerData));
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
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);


  return (
    <div>
      <button onClick={() => setIsModalOpen(true)} className='submit-button'>
        Зарегистрироваться
      </button>

      {isModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <h2>Регистрация</h2>
            <form>
              <div className='form-group'>
                <label>Логин:</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Пароль:</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className='button-group'>
                <button className='submit-button' onClick={handleButtonClick} type="submit" disabled={status === 'loading'}>
                  {status === 'loading' ? 'Загрузка...' : 'Зарегистрироваться'}
                </button>
                <button className='cancel-button' type="button" onClick={handleCloseModal}>Закрыть</button>
              </div>
            </form>
            {status === 'success' && <p>Регистрация успешна!</p>}
            {status === 'error' && <p>Произошла ошибка при регистрации.</p>}
          </div>
        </div>
      )}
    </div>

  );
};

export default Registration;