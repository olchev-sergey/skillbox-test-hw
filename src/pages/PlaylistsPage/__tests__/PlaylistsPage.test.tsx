import { fireEvent, screen } from '@testing-library/react'
import { PlaylistsPage } from '../PlaylistsPage'
import Router from 'react-router-dom'
import { renderWithRouter } from '../../../libs/tests'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: jest.fn(),
}))

describe('Тест компонента PlaylistsPage', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Должен вызвать setSearchParam с теми данными, которые вводятся в input', async () => {
    const cbk = jest.fn()

    jest
      .spyOn(Router, 'useSearchParams')
      .mockReturnValue([new URLSearchParams(), cbk])

    renderWithRouter(<PlaylistsPage />)

    await fireEvent.input(screen.getByTestId('GenreInput'), {
      target: { value: 'rock' },
    })

    expect(cbk).toHaveBeenCalledWith({ searchGenre: 'rock', searchName: '' })

    await fireEvent.input(screen.getByTestId('NameInput'), {
      target: { value: 'alex' },
    })

    expect(cbk).toHaveBeenCalledWith({
      searchGenre: '',
      searchName: 'alex',
    })
  })
})
