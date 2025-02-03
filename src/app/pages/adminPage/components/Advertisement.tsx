import React, { useState } from 'react';
import './styles/style.scss';


// Компонент Advertisement
const Advertisement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Управление видимостью модального окна
  const [theme, setTheme] = useState(''); // Тема
  const [description, setDescription] = useState(''); // Описание
  const [image, setImage] = useState<File | null>(null); // Изображение
  const [preview, setPreview] = useState<string | null>(null); // Предпросмотр изображения

  // Закрытие модального окна
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTheme('');
    setDescription('');
    setImage(null);
    setPreview(null);
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!theme || !description || !image) {
      alert('Пожалуйста, заполните все поля!');
      return;
    }
    alert(`Тема: ${theme}\nОписание: ${description}\nИзображение: ${image.name}`);
    handleCloseModal();
  };

  // Обработка изменения темы
  const handleThemeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(e.target.value);
  };

  // Обработка изменения описания
  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };

  // Обработка загрузки изображения
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={() => setIsModalOpen(true)} className='submit-button'>
        Добавить объявление
      </button>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <h2>Добавить объявление</h2>
            <form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor="theme">Тема:</label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={handleThemeChange}
                  className='input'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor="description">Описание:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={handleDescriptionChange}
                  className='textarea'
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor="image">Изображение:</label>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  required
                />
              </div>
              {preview && (
                <div>
                  <img src={preview} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />
                </div>
              )}
              <div className='button-group'>
                <button type="submit" className='submit-button'>
                  Отправить
                </button>
                <button type="button" onClick={handleCloseModal} className='close-button'>
                  Закрыть
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertisement;