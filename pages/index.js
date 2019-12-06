import houses from './houses.json'
import House from '../components/House'

const Index = () => (
  <div>
    <h2>Places to stay</h2>

    <div className='houses'>
      {houses.map((house, index) => {
        return <House {...house} key={index} />
      })}
    </div>
  </div>
)

export default Index