import { useNavigate } from 'react-router-dom'

import { Container } from './styles'

import { Card } from '../../components/Card'
import { Button } from '../../components/Button'
import FoodExplorer from '../../assets/FoodExplorer.png'
import RocketNotes from '../../assets/RocketNotes.png'
import RocketMovies from '../../assets/RocketMovies.png'

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
          title="Back"
          onClick={handleBack}
        />
      </header>
      <body>
        <Card 
          image={FoodExplorer}
          title="FoodExplorer"
          description="O aplicativo que foi desenvolvido como Desafio Final da trilha Explorer, é um cardápio digital para um restaurante fictício, conhecido como Food Explorer."
          tec={["JavaScript ", "HTML ", "CSS ", "React ", "Styled-Components"]}
        />
        <Card 
          image={RocketNotes}
          title="RocketNotes"
          description="Aplicação Full-Stack desenvolvida para criação de notas. Desenvolvida na trilha Explorer da RocketSeat"
          tec={["JavaScript ", "HTML ", "CSS ", "React ", "Styled-Components"]}
        />
        <Card 
          image={RocketMovies}
          title="RocketMovies"
          description="Aplicação desenvolvida para anotações de filmes e séries. Desenvolvida nos Stages 8, 9 e 10 da trilha Explorer da RocketSeat"
          tec={["JavaScript ", "HTML ", "CSS ", "React ", "Styled-Components"]}
        />
      </body>

      <footer>Made using ReactJS and Styled-Components</footer>
    </Container>
  )
}