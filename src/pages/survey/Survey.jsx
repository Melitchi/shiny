import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Survey.css'
import colors from '../../utils/style/colors'
import { useEffect, useState } from 'react'
import {Loader} from '../../utils/style/Atoms'

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNb = questionNumber === undefined ? 0 : Number(questionNumber)
  const next = questionNb + 1
  const previous = questionNb > 1 ? questionNb - 1 : 1
  const [survey, setSurveyData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  /*
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:8000/survey`)
         .then((response) => response.json()
         .then(({ surveyData }) => {
          setQuestions(surveyData)
          setLoading(false)
        })
         .catch((error) => console.log(error))
     )
 }, [])
*/

useEffect(() =>{
  async function fetchSurvey(){
    setLoading(true)
    try{
      const response = await fetch(`http://localhost:8000/survey`)
      console.log(response)
      const { surveyData } =  await response.json()
      setSurveyData(surveyData)
    }catch(err){
      console.log( "on a une erreur")
      console.log(err)
      setError(true)
    }finally{
      setLoading(false)

    }
  }
  fetchSurvey()
},[])
if (error) {
  return <span>Oups il y a eu un problème</span>
}
  return (
    <StyledDiv className='center'>
      <h1>Question n°{questionNb}</h1>
      {isLoading ? (
        <Loader />
    ) : (
     <p>{survey[questionNb]}</p>
    )}
      <div className='top-margin'>
        <StyledLink to={'/survey/' + previous}>Précédent</StyledLink>
        {survey[questionNb + 1] ? (
          <StyledLink to={'/survey/' + next}>Suivant</StyledLink>
        ) : (
          <StyledLink to="/results">Résultats</StyledLink>
        )}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  flex-direction:column;
  margin:300px;
`

const StyledLink = styled(Link)`
  font: bold;
  text-decoration: none;
  background-color: #F9F9FC;
  color: #333333;
  padding: 10px 20px 10px 20px;
  margin:30px;
  font-size: larger;
  &:hover{
    border-top: 1px solid ${colors.borderColor};
    border-right: 1px solid ${colors.borderColor};
    border-bottom: 1px solid ${colors.borderColor};
    border-left: 1px solid ${colors.borderColor};
  }
  
  border-radius:10px;
`


export default Survey
