import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const renderWithRouter = (ui: ReactElement) => {
  return render(ui, { wrapper: BrowserRouter })
}
