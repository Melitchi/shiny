import { freelanceProfiles } from '../../data/freelanceProfiles'
import Card from '../../components/card/Card'
const Freelances = () => {
  return (
    <div>
      <h1>Freelance</h1>
      {freelanceProfiles.map((profile, index) => (
        <Card
          key={`${profile.name}-${index}`}
          label={profile.jobTitle}
          picture={profile.picture}
          title={profile.name}
        />
      ))}
    </div>
  )
}
export default Freelances
