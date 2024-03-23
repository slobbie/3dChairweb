import CommonLayout from '@src/common/layout/CommonLayout';
import MainPage from '@src/feature/main/MainPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: `/`,
    element: (
      <CommonLayout>
        <MainPage />
      </CommonLayout>
    ),
  },
]);
