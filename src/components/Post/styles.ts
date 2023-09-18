import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 26rem;
  height: 16.25rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;

  padding: 2rem;

  display: flex;
  flex-direction: column;
`

export const PostHeader = styled.div`
  display: flex;

  margin-bottom: 1.125rem;
`

export const Title = styled.div`
  display: flex;

  h1 {
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-title']};
  }
`

export const Time = styled.div`
  display: flex;
  min-width: 53px;
  margin-left: 1rem;

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostContent = styled.div`
  overflow: hidden;

  p {
    color: ${(props) => props.theme['base-text']};
  }
`
