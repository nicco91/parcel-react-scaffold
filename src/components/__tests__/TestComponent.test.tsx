import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import TestComponent from '../TestComponent';

describe('TestComponent', () => {
  it('should render', () => {
    const { getByText } = render(<TestComponent />);
    expect(getByText('TestComponent')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = render(<TestComponent />);
    expect(container).toMatchSnapshot();
  });
});
