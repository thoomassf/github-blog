import styled from 'styled-components'

export const ProfileContainer = styled.div`
  padding: 2rem 2.5rem;

  background-color: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  flex: 1;
`

export const ProfileImage = styled.img`
  width: 9.25rem;
  margin-right: 2rem;
  border-radius: 8px;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProfileName = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 0.5rem;
`

export const GithubLink = styled.div`
  display: flex;
  align-items: center;

  a {
    color: ${(props) => props.theme.blue};
    font-size: 0.75rem;
    font-weight: 700;
    text-decoration: none;

    margin-right: 0.5rem;
  }
`

export const ProfileDescription = styled.p`
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: regular;
`

export const ProfileNetworks = styled.div`
  color: ${(props) => props.theme['base-subtitle']};

  display: flex;
  align-items: center;
`

export const Github = styled.a``

export const Organization = styled.a``

export const Followers = styled.a``
