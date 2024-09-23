import { Link, useParams } from 'react-router-dom'

const Survey = () => {
  const { questionNumber } = useParams()
  const question = questionNumber === undefined ? 0 : Number(questionNumber)
  const next = question + 1
  const previous = question > 1 ? question - 1 : 1
  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question n°{question}</h2>
      <Link to={'/survey/' + previous}>Précédent</Link>
      {question < 10 ? (
        <Link to={'/survey/' + next}>Suivant</Link>
      ) : (
        <Link to="/results">Résultats</Link>
      )}
    </div>
  )
}

export default Survey
