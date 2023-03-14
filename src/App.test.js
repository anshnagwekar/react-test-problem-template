import { render, screen, fireEvent } from '@testing-library/react';

// import your story from App.stories.js
import { Default } from './App.stories';

// Add your tests here
// See https://storybook.js.org/docs/react/writing-tests/importing-stories-in-tests#example-with-testing-library
test('button at default state upon rendering App', () => {
    render(<Default {...Default.args} />);
    const linkElement = screen.getByText(/click me!/i);
    // the "click me!" text should be on the button
    expect(linkElement).toBeInTheDocument();
    // this is a redundant test but it's here to show that our code is correct
    expect(screen.getByRole('button').textContent).toBe('click me!');
    expect(screen.getByRole('button').textContent).not.toBe('thanks');
    });

test('button changes text upon rendering App and clicking', () => {
    render(<Default {...Default.args} />);
    const linkElement = screen.getByText(/click me!/i);
    // we simulate a "click" for the button
    fireEvent.click(linkElement);
    // the "thanks" text should be on the button
    expect(screen.getByText(/thanks/i)).toBeInTheDocument();
    expect(screen.getByRole('button').textContent).not.toBe('click me!');
    expect(screen.getByRole('button').textContent).toBe('thanks');
    });