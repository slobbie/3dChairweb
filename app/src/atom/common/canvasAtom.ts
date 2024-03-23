import { createRef } from 'react';
import { atom } from 'recoil';

export const offsetState = atom({
  key: 'offsetState',
  default: 0,
});

export const canvasState = atom({
  key: 'canvasState',
  default: {
    sections: 3,
    pages: 2,
    zoom: 1,
    top: createRef() as any,
  },
});
