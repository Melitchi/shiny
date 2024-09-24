import PropTypes from 'prop-types'
import DefaultPicture from '../../assets/papyrus.png'
import CardLabel from './CardLabel'
import styled from 'styled-components'
import colors from '../../utils/style/color'
const Card = ({ label, title, picture }) => {
  return (
    <CardWrapper
      style={{ display: 'flex', flexDirection: 'column', padding: 15 }}
    >
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" height={80} width={80} />
      <span>{title}</span>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: DefaultPicture,
}

const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

export default Card
