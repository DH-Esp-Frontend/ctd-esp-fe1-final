import { configureStore} from '@reduxjs/toolkit';
import personajeReducer from '../componentes/slice/rickySlice'
import { composeWithDevTools } from 'redux-devtools-extension';
import rickySlice from '../componentes/slice/rickySlice';

export const store = configureStore({
   reducer:{
    personaje: personajeReducer
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

