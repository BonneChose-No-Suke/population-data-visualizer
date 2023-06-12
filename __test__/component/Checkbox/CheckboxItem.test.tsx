import React from 'react';
import { CheckboxItem } from '../../../app/components/Checkbox/CheckboxItem';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockOnSelectPrefecture = jest.fn();

describe('CheckboxItem', () => {
  const mockPrefecture = {
    prefCode: 1,
    prefName: '北海道',
  };

  it('Render component', () => {
    render(
      <CheckboxItem
        prefecture={mockPrefecture}
        selected={false}
        onSelectPrefecture={mockOnSelectPrefecture}
      />,
    );

    expect(screen.getByText(mockPrefecture.prefName)).toBeInTheDocument();
  });

  it('On click component', async () => {
    render(
      <CheckboxItem
        prefecture={mockPrefecture}
        selected={false}
        onSelectPrefecture={mockOnSelectPrefecture}
      />,
    );

    await userEvent.click(screen.getByRole('button'));
    expect(mockOnSelectPrefecture).toHaveBeenCalledWith(mockPrefecture);
  });
});
