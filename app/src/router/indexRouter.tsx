import MainPage from '@src/feature/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <MainPage />,
  },
]);
