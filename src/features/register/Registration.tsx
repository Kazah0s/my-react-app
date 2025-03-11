import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegisterRequest } from './slice';
import { RootState } from '../../app/Store/store';


const Registration: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [firstName, setFirstName] = useState('');
  const [surName, setSurName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.register.data)

  const handleButtonClick = () => {
    const registerData = {
      name: firstName,
      surName: surName,
      login: login,
      password: password
    };
    dispatch(fetchRegisterRequest(registerData));
    setIsModalOpen(false);
  }

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
                <label>Имя:</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Фамилия:</label>
                <input
                  type="text"
                  value={surName}
                  onChange={(e) => setSurName(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label>Логин:</label>
                <input
                  type="text"
                  value={login}
                  onChange={(e) => setLogin(e.target.value)}
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
              {/* {userInfo.admin == true && "<div className='block'>hello</div>"} */}
              <button className='submit-button' onClick={handleButtonClick} type="submit" disabled={status === 'loading'}>
                {status === 'loading' ? 'Загрузка...' : 'Зарегистрироваться'}
              </button>
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