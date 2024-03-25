import { screen } from '@testing-library/react'
import { UserInfoPage } from '../UserInfoPage'
import Router from 'react-router-dom'
import { USERS } from '../../../data'
import { renderWithRouter } from '../../../libs/tests'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}))

describe('Тест компонента UserInfoPage', () => {
  it('Должен отобразить текст об отсутсвии пользователя, если не смог найти такого с переданным userId', () => {
    jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '100' })
    renderWithRouter(<UserInfoPage />)

    expect(screen.getByText('пользователя таким userId нет')).toBeDefined()
  })

  it('Должен отобразить информацию о пользователе при существующем userId', () => {
    const user = USERS[0]

    jest.spyOn(Router, 'useParams').mockReturnValue({ userId: '0' })
    renderWithRouter(<UserInfoPage />)

    expect(screen.getByText(user.email)).toBeDefined()
    expect(screen.getByText(user.fullName)).toBeDefined()

    expect(screen.getByRole('link').textContent).toBe(user.playlist?.name)
    expect(screen.getByRole('link').getAttribute('href')).toBe(
      `/playlists/${user.playlist?.id}`
    )
  })
})
