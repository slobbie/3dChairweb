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
import * as headerStyles from '@common/components/header/header.style';

/**
 * header 컴포넌트
 * @returns React.JSX.Element
 */
const Header = () => {
  return (
    <header css={headerStyles.headerStyle}>
      <div className='header-inner'>
        <div className='logo'>CHAIR</div>
      </div>
    </header>
  );
};

export default Header;
