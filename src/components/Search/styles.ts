import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  width: 100%;
  margin-top: 4.5rem;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75rem;

  p {
    font-size: 1.125rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const InputSearch = styled.input`
  background-color: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-label']};
  border-radius: 6px;
  border: 1px solid var(--base-border, #1c2f41);

  width: 100%;
  padding: 1rem 0.75rem;
  outline: 0;
`
