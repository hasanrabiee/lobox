import { render, screen, fireEvent } from '@testing-library/react';
import App from "../App";

describe('App component', () => {
    test('renders input and list of items', () => {
        render(<App />);
        const input = screen.getByRole('textbox');
        const items = screen.getAllByTestId('item-container');
        expect(input).toBeInTheDocument();
        expect(items.length).toBe(9);
    });

    test('adds item to the list when Enter key is pressed', () => {
        render(<App />);
        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { value: 'New item' } });
        fireEvent.keyDown(input, { key: 'Enter' });
        const items = screen.getAllByTestId('item-container');
        expect(items.length).toBe(10);
        expect(items[9]).toHaveTextContent('New item');
    });


    test('selects an item when clicking on it', () => {
        render(<App />);
        const firstItem =  screen.getAllByTestId('item-container')[0];
        fireEvent.click(firstItem);
        const image = screen.getAllByRole("img")
        expect(image.length).toBeGreaterThan(0)

    });
});