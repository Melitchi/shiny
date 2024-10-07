import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from '../../utils/context'
import Card from './Card'
import { fireEvent, render, screen } from '@testing-library/react'

describe('testing cards', () => {
  beforeAll(() => {})
  it('should use props img and title', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card label="Développeur" title="Arthur" picture="images/img.png" />
        </ThemeProvider>
      </MemoryRouter>,
    )
    const img = screen.getByRole('img')
    const expectedImg = 'images/img.png'
    expect(img.getAttribute('src')).toBe(expectedImg)
    const expectedTitle = ' Arthur '
    const textZone = screen.getByText('Arthur')

    expect(textZone.textContent).toBe(expectedTitle)
  })

  it('should make user as favourite', () => {
    render(
      <MemoryRouter>
        <ThemeProvider>
          <Card label="Développeur" title="Arthur" picture="images/img.png" />
        </ThemeProvider>
      </MemoryRouter>,
    )
    const textZone = screen.getByText('Arthur')
    const expectedFavouriteText = '⭐️ Arthur ⭐️'
    fireEvent.click(textZone)
    expect(textZone.textContent).toBe(expectedFavouriteText)
  })
})
