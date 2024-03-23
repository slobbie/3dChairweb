import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@router/indexRouter';
import GlobalStyle from '@common/styles/globalStyle';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@common/styles/theme';

const container = document.getElementById('root')!;
const root = createRoot(container!);

root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <GlobalStyle />
      <RouterProvider router={router} />
    </RecoilRoot>
  </ThemeProvider>
);
