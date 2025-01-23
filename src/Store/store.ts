import { configureStore } from '@reduxjs/toolkit'
import rootSaga from './sagas'
import createSagaMiddleware from 'redux-saga'
import counterReducer from './counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

const sagaMiddleware = createSagaMiddleware()
sagaMiddleware.run(rootSaga)



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch