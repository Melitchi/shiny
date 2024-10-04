import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import lightLogo from '../../assets/light-logo.png'
import darkLogo from '../../assets/dark-logo.png'

import './Header.css'
import { useContext } from 'react'
import { ThemeContext } from '../../utils/context'

const StyledLink = styled(Link)`
  padding: 15px;
  color: ${colors.secondary};
  text-decoration: none;
  font-size: 18px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color:${colors.primary};`}
`
const StyledNav = styled.nav`
  padding: 15px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`
const StyledImg = styled.img`
  width: 150px;
`

const Header = () => {
  const { theme } = useContext(ThemeContext)
  const logo = theme === 'light' ? darkLogo : lightLogo
  return (
    <StyledNav>
      <div className="logo">
        <StyledImg alt="logo-shiny" src={logo} />
      </div>
      <div>
        <StyledLink $isFullLink to="/">
          Accueil
        </StyledLink>
        <StyledLink to="/survey/1">Questionnaire</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
