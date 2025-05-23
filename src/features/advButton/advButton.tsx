import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AdvState, fetchAdvRequest, updateAdRequest } from './slice';
import { RootState } from '../../app/Store/store';
import { AdvensData } from '../../app/api/advApi';

const AdvButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClosing, setIsClosing] = useState<boolean>(false);
  // const [advState, setAdvState] = useState({
  //   creator: "",
  //   title: "",
  //   description: "",
  //   date: "",
  //   image: "",
  // });
  const currentUser = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const [formData, setFormData] = useState<AdvensData>({
    creatorName: currentUser.username,
    title: '',
    description: '',
    eventDate: '',
    imageBase64: '',
    // isModer: currentUser.moderator
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const advData: AdvensData = {
      ...formData,
    };
    dispatch(fetchAdvRequest(advData));
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
                <label htmlFor="title" className="adv-label">Тема</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                  className="adv-input"
                  required
                  placeholder="Краткий заголовок"
                />
              </div>

              <div className="adv-form-group">
                <label htmlFor="description" className="adv-label">Описание</label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  className="adv-textarea"
                  required
                  maxLength={250}
                  placeholder="Подробное описание (максимум 250 символов)"
                />
                <span className="adv-counter">{formData.description.length}/250</span>
              </div>

              <div className="adv-form-group">
                <label htmlFor="date" className="adv-label">Дата проведения</label>
                <input
                  type="date"
                  id="date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData(prev => ({ ...prev, eventDate: e.target.value }))}
                  className="adv-input"
                />
              </div>

              <div className="adv-form-group">
                <label htmlFor="image" className="adv-label">Изображение (URL)</label>
                <input
                  type="url"
                  id="image"
                  placeholder="https://example.com/image.jpg"
                  value={formData.imageBase64}
                  onChange={(e) => setFormData(prev => ({ ...prev, imageBase64: e.target.value }))}
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