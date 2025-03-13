import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/Store/store';


const AdvButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.register.data)

  const handleCloseModal = () => {
    setIsModalOpen(false);

  };

  const handleButtonClick = () => {
    const advData = {
      theme: theme,
      description: description,
      date: date,
      image: image,
    };
        // dispatch(fetchRegisterRequest(registerData));
        // setIsModalOpen(false);
  }

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
    <div >
      <button className='submit-button' onClick={() => setIsModalOpen(true)} >
        Создать объявление
      </button>

      {isModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <h2>Введите тему и описание</h2>
            <form onSubmit={handleButtonClick}>
              <div className='form-group'>
                <label htmlFor="theme">Тема:</label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  required
                />
              </div>
              <div className='form-group'>
                <label htmlFor="description">Описание:</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  maxLength={250}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Дата проведения:</label>
                <input 
                type="date" 
                id="date" 
                value={date}
                onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <label htmlFor="file">Фотография:</label>
                <input
                type="url"
                id="file" 
                placeholder='Скопируйте адрес изображения'
                value={image}
                onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className='button-group'>
                <button className='submit-button' 
                onClick={handleButtonClick}
                type="submit">Отправить</button>
                <button className='cancel-button' type="button" onClick={handleCloseModal}>Закрыть</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};



export default AdvButton;