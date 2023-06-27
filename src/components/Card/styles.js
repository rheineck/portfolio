import styled from "styled-components"

export const Container = styled.div`
  width: 800px;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 8px;
  padding: 20px;

  display: grid;
  grid-template-areas: 'img text';
  
  img {
    width: 300px;
    border-radius: 8px;
  }

  .image {
    grid-area: img;
  }

  .text {
    text-align: justify;
    margin-left: 24px;
    grid-area: text;
  }
  
`