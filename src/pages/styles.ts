import styled from 'styled-components'

export const BlogContainer = styled.main`
  max-width: 54rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
`

export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`
