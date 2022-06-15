import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TestComponent from '../TestComponent';

describe('TestComponent', () => {
  test('should render', () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('TestComponent')).toBeInTheDocument();
  });
});
