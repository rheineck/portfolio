import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  height: 500px;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 36px;

  margin: 200px auto;

  border-top: 2px solid gray;
  border-bottom: 2px solid gray;
  color: ${({ theme }) => theme.COLORS.WHITE};

  > img {
    height: 180px;
    width: 180px;
    border-radius: 50%;
    margin-bottom: 20px;
  }

  p {
    text-align: center;
    margin-top: 12px;
  }
  
  a {
    color: ${({ theme }) => theme.COLORS.WHITE};
    padding: 8px;
    border-radius: 24px;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_BUTTON};
  }

  .links {
    display: flex;
    gap: 8px;
    margin-top: 24px;
  }

  footer {
    margin-top: 24px;
  }
`