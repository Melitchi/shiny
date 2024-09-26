import Card from '../../components/card/Card'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'
import { useEffect, useState } from 'react'


function Freelances () {
  const [freelancerList, setFreelancerList] = useState([])
  const [error,setError]= useState(false)
  const [isLoading, setLoading]= useState(false)


  useEffect(() => {
    async function getFreelances(){
      setLoading(true)
      try{
        const response = await fetch('http://localhost:8000/freelances')
        const {freelancersList} = await response.json()
        console.log(freelancersList)
        setFreelancerList(freelancersList)
      }catch(err){
        console.log("une erreur s'est produite lors de la récupération des freelances")
        console.error(err)
        setError(true)
      }finally{
        setLoading(false)
      }
    }
    getFreelances()
  }, [])

  console.log(freelancerList)
  if(error){
    return (<div>Une erreur s'est produite</div>)
  }

  return (
    <div>
      <h1>Freelance</h1>
      <div className="center">
        {isLoading? (
          <Loader/>
        ) : (
          <CardsContainer>
          {freelancerList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.job}
              title={profile.name}
              picture={profile.picture}
            />
          ))}
          </CardsContainer>
        )}
      </div>
    </div>
  )
}

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

export default Freelances
