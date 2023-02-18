import { Container } from './style'

export function App() {

  return (
    <Container>
      <img src="https://github.com/rheineck.png" alt="Foto de Raphael Heineck" />
      <h1>Raphael Gilioli Heineck</h1>

      <p>I'm Chemical Engineer and Master in Pharmaceutical Sciences, now studying to be a Full-Stack Developer.</p>

      <div className="links">
        <a href="http://github.com/rheineck">GitHub</a>
        <a href="http://linkedin.com/in/raphael-gilioli-heineck">Linkedin</a>
        <a href="mailto:raphaelheineck@gmail.com">Email me!</a>
        <a href="#">Curriculum</a>
      </div>

      <footer>Made using ReactJS and Styled-Components</footer>
    </Container>
  )
}