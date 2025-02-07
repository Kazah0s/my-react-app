import React, { useState } from 'react';

// Определяем функциональный компонент ModalFormComponent с типами
const Аdvertisement = () => {
  // Состояние для управления видимостью модального окна
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Состояния для хранения значений полей формы
  const [theme, setTheme] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  // Функция для обработки закрытия модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTheme(''); // Очищаем поля формы при закрытии
    setDescription('');
  };

  // Функция для обработки отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Тема: ${theme}\nОписание: ${description}`);
    handleCloseModal(); // Закрываем модальное окно после отправки
  };

  return (
    <div >
      {/* Кнопка для открытия модального окна */}
      <button onClick={() => setIsModalOpen(true)} >
        Открыть форму
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div >
          <div >
            <h2>Введите тему и описание</h2>
            <form onSubmit={handleSubmit}>
              <div >
                <label htmlFor="theme">Тема:</label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  required
                />
              </div>
              <div >
                <label htmlFor="description">Описание:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit">Отправить</button>
                <button type="button" onClick={handleCloseModal}>Закрыть</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};



export default Аdvertisement;