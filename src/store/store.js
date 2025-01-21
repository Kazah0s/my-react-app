import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // Import your root reducer
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas'; // Import your root saga

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;