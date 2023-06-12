import React from 'react';
import { Batch } from '../../../app/components/common/Batch';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockOnRemovePrefecture = jest.fn();

describe('Batch', () => {
  const mockPrefecture = {
    prefCode: 1,
    prefName: '北海道',
  };

  it('Render component', () => {
    render(<Batch prefecture={mockPrefecture} onRemovePrefecture={mockOnRemovePrefecture} />);

    expect(screen.getByText('1.北海道')).toBeInTheDocument();
  });

  it('On click component', async () => {
    render(<Batch prefecture={mockPrefecture} onRemovePrefecture={mockOnRemovePrefecture} />);

    await userEvent.click(screen.getByRole('button'));
    expect(mockOnRemovePrefecture).toHaveBeenCalledWith(mockPrefecture);
  });
});
