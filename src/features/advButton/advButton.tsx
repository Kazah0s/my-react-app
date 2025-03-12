import React, { useState, useEffect } from 'react';


const AdvButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [theme, setTheme] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [date, setDate] = useState<string>('');
  // const [image, setImage] = useState([]);


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTheme('');
    setDescription('');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(`Тема: ${theme}\nОписание: ${description}`);
    handleCloseModal();
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
    <div >
      <button className='submit-button' onClick={() => setIsModalOpen(true)} >
        Написать объявление
      </button>

      {isModalOpen && (
        <div className='overlay'>
          <div className='modal'>
            <h2>Введите тему и описание</h2>
            <form onSubmit={handleSubmit}>
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
              {/* <div className='form-group'>
                <label htmlFor="image">Фотография:</label>
                <input
                type="image"
                id="image" 
                // value={image}
                // onChange={(e) => setImage(e.target.files)}
                />
              </div> */}
              <div className='button-group'>
                <button className='submit-button' type="submit">Отправить</button>
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