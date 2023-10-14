import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

export const Container = styled.div`
  font-family: 'Inter', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  background: #FFF;
`

export const Title = styled.h1`
  color: #000;
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

export const Description = styled.p`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`

export const ErrorMessage = styled.p`
  color: #BF0E0E;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`
