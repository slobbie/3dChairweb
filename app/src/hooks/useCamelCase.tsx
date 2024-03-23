// =============================================================================
// File    :  useCamelCase.tsx
// Class   :
// Purpose :  useCamelCase
// Date    :  2024.03
// Author  :  JHS
// History :
// =============================================================================
// Copyright (C) 2023 JHS. All rights reserved.
// =============================================================================

/**
 *  문자를 카멜케이스로 변환 시켜줍니다
 * @param { string } pText
 * @returns string
 */
const useCamelCase = (pText: string): string => {
  return pText
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase())
    .replace(/\s+/g, '')
    .replace(/^(.)/, (c) => c.toLowerCase())
    .replace(/\)/g, '');
};

export default useCamelCase;
