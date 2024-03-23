// =============================================================================
// File    :  CommonLayout.tsx
// Class   :
// Purpose :  CommonLayout
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================
import Header from '../components/header/Header';

interface ICommonLayout {
  children: React.ReactNode;
}

/**
 * 공통 레이아웃 컴포넌트
 * @returns React.JSX.Element
 */
const CommonLayout = ({ children }: ICommonLayout) => {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
};

export default CommonLayout;
