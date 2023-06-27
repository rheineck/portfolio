import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import FoodExplorer from '../../assets/FoodExplorer.png'

export function Portfolio() {
  const navigate = useNavigate()

  function handleBack() {
    navigate('/')
  }

  return (
    <Container>
      <header>
        <h1>Portfolio</h1>
        <span>To view more details, click <a href="https://github.com/rheineck">here</a></span>
        <Button 
          title="Voltar"
          onClick={handleBack}
        />
      </header>
      <body>
        <Card 
          image={FoodExplorer}
          title="FoodExplorer"
          description="O aplicativo que foi desenvolvido como Desafio Final da trilha Explorer, é um cardápio digital para um restaurante fictício, conhecido como Food Explorer."
          tec={["JavaScript ", "HTML ", "CSS ", "React ", "Style-Components"]}
        />
      </body>

      <footer>Made using ReactJS and Styled-Components</footer>
    </Container>
  )
}