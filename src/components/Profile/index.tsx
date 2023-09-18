import { ArrowSquareOut, GithubLogo, Users } from 'phosphor-react'
import {
  Followers,
  Github,
  GithubLink,
  Organization,
  ProfileContainer,
  ProfileDescription,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  ProfileNetworks,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="http://github.com/thoomassf.png" />

      <ProfileInfo>
        <ProfileName>
          <h1>Thomas Farias</h1>

          <GithubLink>
            <a href="#">GITHUB</a>
            <ArrowSquareOut size={16} weight="bold" color="#3294F8" />
          </GithubLink>
        </ProfileName>
        <ProfileDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint
          ullam nesciunt, laudantium recusandae debitis, quisquam, sunt modi
          quam veniam error.
        </ProfileDescription>

        <ProfileNetworks>
          <Github>
            <GithubLogo size={18} color="#161418" weight="bold" />
            thoomassf
          </Github>

          <Organization>
            <GithubLogo size={18} color="#161418" weight="bold" />
            Rocketseat
          </Organization>

          <Followers>
            <Users size={18} color="#161418" weight="bold" />
            32 seguidores
          </Followers>
        </ProfileNetworks>
      </ProfileInfo>
    </ProfileContainer>
  )
}
