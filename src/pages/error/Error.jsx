import styled from 'styled-components'
import errorImg from '../../assets/404.svg'
import colors from '../../utils/style/colors'

const Error = () => {
  return (
    <StyledDiv>
      <p>Oups 🙈 ...</p>
      <StyledImg alt="404-image" src={errorImg}></StyledImg>
      <p>Il semblerait qu'il y ait un problème</p>
    </StyledDiv>
  )
}
export default Error


const StyledDiv = styled.div`
  width:100%;
  height:100%;
  margin:30px;
  padding:100px;
  display:flex;
  flex-direction:column;
  background-color:${colors.backgroundLight};
  align-items:center;
`

const StyledImg = styled.img`

max-width: 800px;
`