import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAdvRequest } from './slice';
import { RootState } from '../../app/Store/store';
import styles from '../../styles/style.scss';

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
    // Очищаем форму после отправки
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
    <div className="container">
      <button
        className="triggerButton"
        onClick={() => setIsModalOpen(true)}
      >
        Создать объявление
      </button>

      {isModalOpen && (
        <div
          className={`${"overlay"} ${isClosing ? "fadeOut" : "fadeIn"}`}
          onClick={handleCloseModal}
        >
          <div
            className={`${"modal"} ${isClosing ? "slideDown" : "slideUp"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={"closeButton"}
              onClick={handleCloseModal}
              aria-label="Закрыть модальное окно"
            >
              &times;
            </button>

            <h2 className={"title"}>Новое объявление</h2>

            <form onSubmit={handleSubmit} className={"form"}>
              <div className={"formGroup"}>
                <label htmlFor="theme" className={"label"}>Тема</label>
                <input
                  type="text"
                  id="theme"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                  required
                  placeholder="Краткий заголовок"
                />
              </div>

              <div className={"formGroup"}>
                <label htmlFor="description" className={"label"}>Описание</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  maxLength={250}
                  className={"textarea"}
                  placeholder="Подробное описание (максимум 250 символов)"
                />
                <span className={"counter"}>{description.length}/250</span>
              </div>

              <div className={"formGroup"}>
                <label htmlFor="date" className={"label"}>Дата проведения</label>
                <input
                  type="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className={"input"}
                />
              </div>

              <div className={"formGroup"}>
                <label htmlFor="image" className={"label"}>Изображение (URL)</label>
                <input
                  type="url"
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  className={"input"}
                />
              </div>

              <div className={"actions"}>
                <button
                  type="button"
                  className={"cancelButton"}
                  onClick={handleCloseModal}
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  className={"submitButton"}
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