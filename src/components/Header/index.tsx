import { HeaderContainer } from './styled'
import header from '../../assets/Header.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={header} alt="" />
    </HeaderContainer>
  )
}
