import { render, screen } from '@testing-library/react';
import Home from 'pages/index';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Home page', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Statistics/,
    });

    expect(heading).toBeInTheDocument();
  });

  it('renders Home page unchanged', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
