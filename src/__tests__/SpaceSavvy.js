import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import { SpaceSavvy } from '../pages/SpaceSavvy';
import { SearchField } from '../components/common/SearchField';

test('Render Space Savvy page properly', () => {
    render(<SpaceSavvy />);
    const linkElement = screen.getByText(/Copyright © 2023 Space Savvy/i);
    expect(linkElement).toBeInTheDocument();
});

test('Render all filter fields', () => {
    render(<SearchField />);
    expect(screen.getByLabelText('Keyword').getAttribute("placeholder")).toBe("eg Falcon");
    expect(screen.queryByTestId('launchPad')).toBeInTheDocument();
});

// const DOWN_ARROW = { keyCode: 40 };

// it('renders and values can be filled then submitted', async () => {
//   const {
//     asFragment,
//     getByLabelText,
//     getByText,
//   } = render(<SearchField />);

//   const getSelectItem = (getByLabelText, getByText) => async (selectLabel, itemText) => {
//     fireEvent.keyDown(getByLabelText(selectLabel), DOWN_ARROW);
//     await waitForElement(() => getByText(itemText));
//     fireEvent.click(getByText(itemText));
//   }

//   const selectItem = getSelectItem(getByLabelText, getByText);

//   await selectItem('Label', 'Option');
// });
