import React from 'react';
import { SelectDropdown } from '../../../app/components/Checkbox/SelectDropdown';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const mockOnSelectPrefecture = jest.fn();

describe('SelectDropdown', () => {
  const mockPrefList = [
    {
      prefCode: 1,
      prefName: '北海道',
    },
  ];

  const mockPrefectures = [
    {
      prefCode: 1,
      prefName: '北海道',
    },
    {
      prefCode: 2,
      prefName: '青森県',
    },
  ];

  it('Render component', () => {
    render(
      <SelectDropdown
        prefectures={mockPrefectures}
        onSelectPrefecture={mockOnSelectPrefecture}
        prefList={mockPrefList}
      />,
    );

    expect(screen.getByText('北海道')).toBeInTheDocument();
    expect(screen.getByText('青森県')).toBeInTheDocument();
  });

  it('Set options fot the number of prefectures', () => {
    render(
      <SelectDropdown
        prefectures={mockPrefectures}
        onSelectPrefecture={mockOnSelectPrefecture}
        prefList={mockPrefList}
      />,
    );

    expect(screen.getAllByRole('option')).toHaveLength(2);
  });

  it('On select the other prefecture', async () => {
    render(
      <SelectDropdown
        prefectures={mockPrefectures}
        onSelectPrefecture={mockOnSelectPrefecture}
        prefList={mockPrefList}
      />,
    );

    await userEvent.selectOptions(screen.getByRole('combobox'), '2');
    expect(mockOnSelectPrefecture).toHaveBeenCalledWith(mockPrefectures[1]);
  });
});
