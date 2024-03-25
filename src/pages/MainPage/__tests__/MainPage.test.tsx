import { render } from '@testing-library/react'
import { MainPage } from '../MainPage'

describe('Тест компонента MainPage', () => {
  it('Проверка корректного отображения содержимого страницы', () => {
    const { container } = render(<MainPage />)

    expect(container).toMatchSnapshot()
  })
})
