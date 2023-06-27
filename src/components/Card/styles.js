import styled from "styled-components"

export const Container = styled.div`
  width: 800px;
  height: 262px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 20px;

  display: grid;
  grid-template-areas: 'img text';
  
  img {
    width: 300px;
    border-radius: 8px;
  }

  h2 {
    margin-bottom: 12px;
  }

  span {
    font-size: 18px;
  }

  .image {
    grid-area: img;
  }

  .text {
    text-align: justify;
    margin-left: 24px;
    grid-area: text;
  }

  .tecnologies {
    height: 50px;
    width: 100%;
    border-radius: 8px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
    padding: 10px;
    margin-top: 12px;
  }  
`