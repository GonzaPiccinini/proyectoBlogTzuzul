import Home from "../components/Home/Home"
import HomePrimaryPost from "../components/Home/HomePrimaryPost"
import HomePosts from "../components/Home/HomePosts"

export const getServerSideProps = async ({ req }) => {
  const response = await fetch(`http://${req.headers.host}/api/posts/highlightsPosts`)
  const data = await response.json()

  return {
    props: {
      posts: data
    }
  }
}

export default function HomePage({ posts }) {

  return (
    <>
      <Home />
      <HomePrimaryPost post={posts[0]} />
      <HomePosts posts={posts} />
    </>
  )
}
