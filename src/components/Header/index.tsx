import { HeaderContainer } from './styles'

import LogoImg from '../../assets/Logo.svg'
import LeftImg from '../../assets/LeftHeader.svg'
import RightImg from '../../assets/RightHeader.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={LeftImg} alt="" />
      <img src={LogoImg} alt="" />
      <img src={RightImg} alt="" />
    </HeaderContainer>
  )
}
