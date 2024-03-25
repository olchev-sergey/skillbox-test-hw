import { render, screen } from '@testing-library/react'
import { PlaylistInfoPage } from '../PlaylistInfoPage'
import Router, { BrowserRouter } from 'react-router-dom'
import { PLAYLISTS } from '../../../data'
import { renderWithRouter } from '../../../libs/tests'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

describe('Тест компонента PlaylistPage', () => {
  it('Должен отобразить соответсвующий текст при несуществующем playlistId', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '100' })
    renderWithRouter(<PlaylistInfoPage />)

    expect(screen.getByText('плейлист с таким playlistId нет')).toBeDefined()
  })

  it('Должен отобразить данные о playlist при передаче существующего playlistId', () => {
    const playlist = PLAYLISTS[0]

    jest.spyOn(Router, 'useParams').mockReturnValue({ playlistId: '0' })
    const { container } = renderWithRouter(<PlaylistInfoPage />)

    expect(screen.getByText(playlist.genre)).toBeDefined()
    expect(screen.getByText(playlist.name)).toBeDefined()

    expect(container.getElementsByClassName('songs')[0].childNodes.length).toBe(
      playlist.songs.length
    )
  })
})
