import { } from 'dotenv'
import MainPage from './page';
import {watchFetchUser} from './saga'
import {actions, reducer} from './slice'

export {MainPage, watchFetchUser, actions, reducer};