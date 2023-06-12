import React from 'react';
import { ChartArea } from '../../../app/components/ChartArea/ChartArea';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { PrefectureContext } from '../../../app/utils/context';

const mockAddPref = jest.fn();
const mockRemovePref = jest.fn();

describe('ChartArea', () => {
  it('Render component', () => {
    render(
      <PrefectureContext.Provider
        value={{ prefList: [], addPref: mockAddPref, removePref: mockRemovePref }}
      >
        <ChartArea />
      </PrefectureContext.Provider>,
    );

    expect(document.querySelector('.ChartArea')).toBeInTheDocument();
    expect(screen.queryByRole('canvas')).not.toBeTruthy();
  });
});
