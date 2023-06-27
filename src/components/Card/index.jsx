import { Container } from './styles'

export function Card({ title, description, tec, image, ...rest}) {

  return  (
    <Container {...rest}>
      <div className='image'>
        <img src={image} alt="Foto do Projeto" />
      </div>
      <div className="text">
        <h2>{title}</h2>
        <span>{description}</span>
        <div className="tecnologies">
          {tec}
        </div>
      </div>
    </Container>
  )
}