import React from 'react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Timer from '../components/Timer.tsx';
/*
potential tests:
1. a <Timer/> component is created
2. ...
*/
describe('the first set of basic timer tests', () => {
  it('A Timer Component is created', () => {
    const component = render(<Timer />);
    expect(component).toBeDefined();
  });
});
