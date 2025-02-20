import React, { useState } from 'react';
// import '../../styles.scss';


const Registration = () => {
    const [name, setName] = useState<string>('');
    const [subName, setSubName] = useState<string>('');
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <div>
            <img src="/UI/Логотип.png" alt="Лого"/>
            <div>
                <input type='text' id='name' placeholder='Имя' />
                <input type='text' id='subName' placeholder='Фамилия'/>
                <input type='text' id='login' placeholder='Логин'/>
                <input type='password' id='password' placeholder='Пароль'/>
            </div>
            <div>
                <button>Готово</button>
            </div>
        </div>
    )
}

export default Registration