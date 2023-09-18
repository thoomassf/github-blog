import { SearchContainer, Header, InputSearch } from './styles'

export function Search() {
  return (
    <SearchContainer>
      <Header>
        <p>Publicações</p>

        <span>6 publicações</span>
      </Header>

      <form>
        <InputSearch type="text" placeholder="Buscar conteúdo" />
      </form>
    </SearchContainer>
  )
}
