import { ThemeProvider } from '../../utils/context'
import Footer from './footer'
import { fireEvent, render, screen } from '@testing-library/react'

describe('Footer', () => {
  it('should render witjout crash', async () => {
    render(
      <ThemeProvider>
        <Footer />
      </ThemeProvider>,
    )
    const nightModeButton = screen.getByRole('button')
    expect(nightModeButton.textContent).toBe('Changer de mode : ☀️')
    fireEvent.click(nightModeButton)
    expect(nightModeButton.textContent).toBe('Changer de mode : 🌙')
  })
})
