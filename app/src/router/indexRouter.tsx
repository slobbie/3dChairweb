import MainPage from '@src/feature/main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: <MainPage />,
    // children: [
    //   {
    //     path: '',
    //     element: ,
    //   },
    // ],
  },
]);
