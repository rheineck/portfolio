import { Container } from './styles'
import FoodExplorer from '../../assets/FoodExplorer.png'

export function Card({ title, description,...rest}) {

  return(
    <Container>
      <div className='image'>
        <img src={FoodExplorer} alt="Foto do Projeto FoodExplorer" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <span>{description}</span>
      </div>
    </Container>
  )
}