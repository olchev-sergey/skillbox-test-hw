import { fireEvent, screen } from '@testing-library/react'
import { UsersPage } from '../UsersPage'
import Router from 'react-router-dom'
import { renderWithRouter } from '../../../libs/tests'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}))

describe('Тест компонента UsersPage', () => {
  it('Должен вызвать setSearchParam с теми данными, которые вводятся в input', async () => {
    const cbk = jest.fn()

    jest
      .spyOn(Router, 'useSearchParams')
      .mockReturnValue([new URLSearchParams(), cbk])

    renderWithRouter(<UsersPage />)

    await fireEvent.input(screen.getByTestId('NameInput'), {
      target: { value: 'alex' },
    })

    expect(cbk).toHaveBeenCalledWith({ searchName: 'alex' })
  })
})
