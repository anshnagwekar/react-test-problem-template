import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('button at default state upon rendering App', () => {
    render(<Default {...Default.args} />);
    const linkElement = screen.getByText(/click me!/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).toBe('click me!');
    expect(screen.getByRole('button').textContent).not.toBe('thanks');
    });

test('button changes text upon rendering App and clicking', () => {
    render(<Default {...Default.args} />);
    const linkElement = screen.getByText(/click me!/i);
    fireEvent.click(linkElement);
    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).not.toBe('click me!');
    expect(screen.getByRole('button').textContent).toBe('thanks');
    });