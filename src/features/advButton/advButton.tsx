import React, { useState } from 'react';


const AdvButton = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  
  const [theme, setTheme] = useState<string>('');
  const [description, setDescription] = useState<string>('');


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

  return (
    <div >
      <button onClick={() => setIsModalOpen(true)} >
        Написать объявление
      </button>

      {isModalOpen && (
        <div>
          <div>
            <h2>Введите тему и описание</h2>
            <form onSubmit={handleSubmit}>
              <div>
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



export default AdvButton;