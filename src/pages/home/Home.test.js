import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../../utils/context'
import Home from './Home'

describe('The Home component', () => {
  it('should render title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </MemoryRouter>,
    )
    const expectedText =
      ' Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
    expect(
      screen.getByRole('heading', { level: 2, text: expectedText }),
    ).toBeTruthy()
  })
})
