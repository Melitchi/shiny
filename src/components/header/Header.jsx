import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import lightLogo from '../../assets/light-logo.png'
import './Header.css'
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
  return (
    <StyledNav>
      <div className="logo">
        <StyledImg alt="logo-shiny" src={lightLogo} />
        <h1 className="title">Shiny</h1>
      </div>
      <div>
        <StyledLink $isFullLink to="/">
          Accueil
        </StyledLink>
        <StyledLink to="/survey">Questionnaire</StyledLink>
        <StyledLink to="/freelances">Freelances</StyledLink>
      </div>
    </StyledNav>
  )
}

export default Header
