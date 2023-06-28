import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;

  header {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    a {
      text-decoration: underline;
    }
  }

  body {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`