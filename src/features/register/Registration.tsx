import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store/store';
import { fetchRegisterRequest } from './slice';


const Registration: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

const dispatch = useDispatch();
const data = useSelector((state: RootState) => state.register.data)

  const handleButtonClick = () => {
    const registerData = {
      name: firstName,
      fam: lastName,
      login: login,
      password: password
    };
    dispatch(fetchRegisterRequest(registerData));
}

  return (
    <div>
      <h2>Регистрация</h2>
      <form>
        <div>
          <label>Имя:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Фамилия:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Логин:</label>
          <input
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Пароль:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button onClick={handleButtonClick} type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Загрузка...' : 'Зарегистрироваться'}
        </button>
      </form>
      {status === 'success' && <p>Регистрация успешна!</p>}
      {status === 'error' && <p>Произошла ошибка при регистрации.</p>}
    </div>
  );
};

export default Registration;