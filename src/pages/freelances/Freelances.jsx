import { freelanceProfiles } from '../../data/freelanceProfiles'
import Card from '../../components/card/Card'
import styled from 'styled-components'

const Freelances = () => {
  return (
    <div>
      <h1>Freelance</h1>
      <div className="center">
        <CardsContainer>
          {freelanceProfiles.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.jobTitle}
              picture={profile.picture}
              title={profile.name}
            />
          ))}
        </CardsContainer>
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
