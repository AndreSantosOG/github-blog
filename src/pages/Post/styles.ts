import styled from 'styled-components'

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .containerTop {
    width: 864px;
    height: 168px;
    padding: 32px;
    border-radius: 10px;
    margin-top: -96px;
    background: ${(props) => props.theme['base-profile']};
    .options {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 20px;
      a {
        font-size: 12px;
        font-weight: bold;
        line-height: 160%;
        color: ${(props) => props.theme.blue};
        text-decoration: none;
        display: flex;
        align-items: center;
        gap: 8px;
        &:hover {
          color: ${(props) => props.theme['base-label']};
          transition: 0.2s;
        }
      }
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
      margin-bottom: 8px;
    }
    .informationsPost {
      display: flex;
      align-items: center;
      gap: 32px;
      span {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 18px;
        color: ${(props) => props.theme['base-label']};
        p {
          font-size: 16px;
          font-weight: 400;
          line-height: 160%;
          color: ${(props) => props.theme['base-span']};
        }
      }
    }
  }
  .containerMain {
    width: 864px;
    height: 422px;
    padding: 40px 32px;
    p {
      line-height: 160%;

      span {
        color: ${(props) => props.theme.blue};
        text-decoration: underline;
      }
      .secondText {
        margin-top: 30px;
      }
    }
    .containerCode {
      width: 800px;
      height: 110px;
      margin-top: 24px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      background: ${(props) => props.theme['base-post']};
      p {
        .observation {
          color: #4f6173;
          text-decoration: none;
          margin-left: 25px;
        }
        .result {
          color: #6ad445;
          text-decoration: none;
        }
        .let {
          text-decoration: none;
          color: #80abd6;
        }
      }
    }
  }
`
