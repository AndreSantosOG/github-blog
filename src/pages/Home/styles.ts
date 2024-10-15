import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .profile {
    display: flex;
    gap: 2rem;
    padding: 2rem;
    width: 864px;
    height: 212px;
    position: relative;
    background: ${(props) => props.theme['base-profile']};
    margin-top: -98px;
    img {
      width: 148px;
      height: 148px;
      border-radius: 8px;
    }
    .profile-informationTwo {
      display: flex;
    }
    h1 {
      font-size: 24px;
      font-weight: bold;
      line-height: 130%;
      color: ${(props) => props.theme['base-title']};
    }
    a {
      position: absolute;
      top: 0;
      right: 0;
      margin-top: 40px;
      margin-right: 32px;
      font-size: 12px;
      font-weight: bold;
      line-height: 160%;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${(props) => props.theme.blue};
      background: transparent;
      border: none;
      cursor: pointer;
    }
    p {
      margin-top: 8px;
      margin-bottom: 24px;
    }
    .profile-details {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-right: 24px;
      line-height: 160%;
      font-size: 16px;
      font-weight: 400;
    }
    .icon-small {
      font-size: 16px;
    }
  }
  .search {
    margin-top: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 64px;
    .inform {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 679px;
      .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 160%;
        color: ${(props) => props.theme['base-subtitle']};
      }
      .numberPublications {
        font-size: 14px;
        font-weight: 400;
        line-height: 160%;
        color: ${(props) => props.theme['base-span']};
      }
    }
    input {
      width: 864px;
      height: 50px;
      padding: 12px 16px;
      margin-top: 12px;
      border: 1px solid ${(props) => props.theme['base-border']};
      border-radius: 6px;
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-label']};
    }
  }
  .publications {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
`
