import { Header } from '../components/Header'
import { Post } from '../components/Post'
import { Profile } from '../components/Profile'
import { Search } from '../components/Search'

import { BlogContainer, PostGrid } from './styles'

export function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <Profile />
        <Search />

        <PostGrid>
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </PostGrid>
      </BlogContainer>
    </>
  )
}
