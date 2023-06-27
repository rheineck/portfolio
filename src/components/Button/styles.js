import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  width: fit-content;
  padding: 4px;
  border-radius: 10px;

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 18px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON_HOVER};
  }
  
`