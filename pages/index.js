import houses from './houses.json'
import House from '../components/House'
import Layout from '../components/Layout'

const Index = () => (
  <Layout>
    <div>
      <h2>Places to stay</h2>

      <div className='houses'>
        {houses.map((house, index) => {
          return <House {...house} key={index} />
        })}
      </div>

      <style jsx>{`
        .houses {
          display: grid;
          grid-template-columns: 50% 50%;
          grid-template-rows: 300px 300px;
          grid-gap: 40px;
        }
      `}</style>
    </div>
  </Layout>
)

export default Index