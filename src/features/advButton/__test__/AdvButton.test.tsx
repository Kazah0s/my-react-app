// import React from 'react';
// import AdvButton from '../advButton';

// import { render, screen, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import { Provider } from 'react-redux';
// import { store } from '../../../app/Store/store';


// describe('AdvButton Component', () => {
//   beforeEach(() => {
//     jest.clearAllMocks();
//   });

//   const renderWithRedux = () => {
//     return render(
//       <Provider store={store}>
//         <AdvButton />
//       </Provider>
//     );
//   };

//   it('рендерит кнопку "Создать объявление"', () => {
//     renderWithRedux();
//     expect(screen.getByText(/Создать объявление/i)).toBeInTheDocument();
//   });

//   it('открывает модальное окно при клике', async () => {
//     renderWithRedux();
//     const button = screen.getByText(/Создать объявление/i);
//     await userEvent.click(button);
//     expect(screen.getByText(/Новое объявление/i)).toBeInTheDocument();
//   });
//   it('закрывает модальное окно при клике на крестик', async () => {
//     renderWithRedux();
//     const openButton = screen.getByText(/Создать объявление/i);
//     await userEvent.click(openButton);

//     const closeButton = screen.getByLabelText(/Закрыть модальное окно/i);
//     await userEvent.click(closeButton);

//     expect(screen.queryByText(/Новое объявление/i)).not.toBeInTheDocument();
//   });

//   it('закрывает модальное окно при нажатии Escape', async () => {
//     renderWithRedux();
//     const openButton = screen.getByText(/Создать объявление/i);
//     await userEvent.click(openButton);

//     await userEvent.keyboard('{Escape}');

//     expect(screen.queryByText(/Новое объявление/i)).not.toBeInTheDocument();
//   });

//   it('ограничивает ввод описания до 250 символов', async () => {
//     renderWithRedux();
//     const openButton = screen.getByText(/Создать объявление/i);
//     await userEvent.click(openButton);

//     const descriptionInput = screen.getByLabelText(/Описание/i);
//     const counter = screen.getByText(/0\/250/i);

//     await userEvent.type(descriptionInput, 'a'.repeat(250));
//     expect(counter).toHaveTextContent('250/250');
//   });

//   it('вызывает dispatch при отправке формы', async () => {
//     const useDispatchSpy = jest.spyOn(require('react-redux'), 'useDispatch');
//     const mockDispatch = jest.fn();
//     useDispatchSpy.mockReturnValue(mockDispatch);

//     renderWithRedux();

//     const openButton = screen.getByText(/Создать объявление/i);
//     await userEvent.click(openButton);

//     const titleInput = screen.getByLabelText(/Тема/i);
//     const descriptionInput = screen.getByLabelText(/Описание/i);
//     const dateInput = screen.getByLabelText(/Дата проведения/i);
//     const imageInput = screen.getByLabelText(/Изображение \(URL\)/i);

//     await userEvent.type(titleInput, 'Test Title');
//     await userEvent.type(descriptionInput, 'Test Description');
//     await userEvent.type(dateInput, '2025-01-01');
//     await userEvent.type(imageInput, 'https://example.com/image.jpg');

//     const submitButton = screen.getByText(/Опубликовать/i);
//     await userEvent.click(submitButton);

//     expect(mockDispatch).toHaveBeenCalled();
//   });

//   it('snapshot соответствует текущему UI', () => {
//     const { container } = render(
//       <Provider store={store}>
//         <AdvButton />
//       </Provider>
//     );
//     expect(container).toMatchSnapshot();
//   });
// });