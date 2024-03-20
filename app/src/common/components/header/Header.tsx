// =============================================================================
// File    :  Header.tsx
// Class   :
// Purpose :  Header
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2024 JHS All rights reserved.
// =============================================================================
/** @jsxImportSource @emotion/react */
import * as headerStyles from '@common/components/header/header.style';
/**
 * header 컴포넌트
 * @returns React.JSX.Element
 */
const Header = () => {
  return (
    <header css={headerStyles.headerStyle}>
      <div className='header-inner'>
        <div className='logo'>CHAIR.</div>
        <nav>
          <ul>
            <li>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
