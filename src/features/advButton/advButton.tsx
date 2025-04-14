import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvRequest } from './slice';
import { RootState } from '../../app/Store/store';

const AdvButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);

  const [theme, setTheme] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.adv.data);

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const advData = {
      theme,
      description,
      date,
      image,
    };
    dispatch(fetchAdvRequest(advData));
    setTheme('');
    setDescription('');
    setDate('');
    setImage('');
    handleCloseModal();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleCloseModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  return (
    <div className="adv-container">
      <button
        className="adv-trigger-button"
        onClick={() => setIsModalOpen(true)}
      >
        Создать объявление
      </button>

      {isModalOpen && (
        <div
          className={`adv-overlay ${isClosing ? 'adv-fade-out' : 'adv-fade-in'}`}
          onClick={handleCloseModal}
        >
          <div
            className={`adv-modal ${isClosing ? 'adv-slide-down' : 'adv-slide-up'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="adv-close-button"
              onClick={handleCloseModal}
              aria-label="Закрыть модальное окно"
            >
              &times;
            </button>

            <h2 className="adv-title">Новое объявление</h2>

            <form onSubmit={handleSubmit} className="adv-form">
              <div className="adv-form-group">
                <label htmlFor="theme" className="adv-label">Тема</label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  className="adv-input"
                  required
                  placeholder="Краткий заголовок"
                />
              </div>

              <div className="adv-form-group">
                <label htmlFor="description" className="adv-label">Описание</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="adv-textarea"
                  required
                  maxLength={250}
                  placeholder="Подробное описание (максимум 250 символов)"
                />
                <span className="adv-counter">{description.length}/250</span>
              </div>

              <div className="adv-form-group">
                <label htmlFor="date" className="adv-label">Дата проведения</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="adv-input"
                />
              </div>

              <div className="adv-form-group">
                <label htmlFor="image" className="adv-label">Изображение (URL)</label>
                <input
                  type="url"
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className="adv-input"
                />
              </div>

              <div className="adv-actions">
                <button
                  type="button"
                  className="adv-cancel-button"
                  onClick={handleCloseModal}
                >
                  Закрыть
                </button>
                <button
                  type="submit"
                  className="adv-submit-button"
                >
                  Опубликовать
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvButton;