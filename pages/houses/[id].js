import houses from '../houses.json'
import Head from 'next/head'

const House = props => (
  <div>
    <Head>
      <title>{props.house.title}</title>
    </Head>
    <img src={props.house.picture} width='50%' alt='House picture' />
    <p>
      {props.house.type} - {props.house.town}
    </p>
    <p>{props.house.title}</p>
    <p>
      {props.house.rating} ({props.house.reviewsCount})
    </p>
  </div>
)

House.getInitialProps = ({query}) => {
  const { id } = query

  return {
    house: houses.filter(house => house.id === id )[0]
  }
}

export default House