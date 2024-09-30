import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import './Survey.css'
import colors from '../../utils/style/colors'
import { useEffect, useState, useContext } from 'react'
import { Loader } from '../../utils/style/Atoms'
import { SurveyContext } from '../../utils/context'

const Survey = () => {
  const { questionNumber } = useParams()
  const questionNb = questionNumber === undefined ? 0 : Number(questionNumber)
  const next = questionNb + 1
  const previous = questionNb > 1 ? questionNb - 1 : 1
  const [survey, setSurveyData] = useState({})
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchSurvey() {
      setLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        console.log(response)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (err) {
        console.log(err)
        setError(true)
      } finally {
        setLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  const { answers, saveAnswers } = useContext(SurveyContext)

  const saveReply = (answer) => {
    saveAnswers({ [questionNumber]: answer })
  }

  if (error) {
    return <span>Oups il y a eu un problème</span>
  }
  return (
    <StyledDiv className="center">
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>Question n°{questionNb}</h1>
          <p>{survey[questionNb]}</p>
          {answers && (
            <ReplyWrapper>
              <ReplyBox
                onClick={() => saveReply(true)}
                isSelected={answers[questionNumber] === true}
              >
                Oui
              </ReplyBox>
              <ReplyBox
                onClick={() => saveReply(false)}
                isSelected={answers[questionNumber] === false}
              >
                Non
              </ReplyBox>
            </ReplyWrapper>
          )}
          <LinkWrapper className="top-margin">
            <Link to={'/survey/' + previous}>Précédent</Link>
            {survey[questionNb + 1] ? (
              <Link to={'/survey/' + next}>Suivant</Link>
            ) : (
              <Link to="/results">Résultats</Link>
            )}
          </LinkWrapper>
        </div>
      )}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  flex-direction: column;
  margin: 150px;
`

const StyledLink = styled(Link)`
  font: bold;
  text-decoration: none;
  background-color: #f9f9fc;
  color: #333333;
  padding: 10px 20px 10px 20px;
  margin: 30px;
  font-size: larger;
  &:hover {
    border-top: 1px solid ${colors.borderColor};
    border-right: 1px solid ${colors.borderColor};
    border-bottom: 1px solid ${colors.borderColor};
    border-left: 1px solid ${colors.borderColor};
  }
  border-radius: 10px;
`
const LinkWrapper = styled.div`
  padding-top: 30px;
  & a {
    color: black;
  }
  & a:first-of-type {
    margin-right: 20px;
  }
`

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : 'none'};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`

export default Survey
