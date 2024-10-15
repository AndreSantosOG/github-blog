import styled from 'styled-components'

export const PubliContainer = styled.a`
  width: 416px;
  height: 260px;
  padding: 32px;
  background: red;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};
  margin-bottom: 25px;
  .title {
    display: flex;
    gap: 16px;
    h1 {
      font-size: 20px;
      font-weight: bold;
      line-height: 160%;
      color: ${(props) => props.theme['base-title']};
    }
    span {
      font-size: 14px;
      font-weight: 400;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
      margin-top: 6px;
    }
  }
  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
  }
  .teste {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    box-sizing: border-box;
  }
`
