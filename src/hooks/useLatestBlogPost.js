import { useStaticQuery, graphql } from "gatsby"

const useLatestBlogPost = () => {
  const data = useStaticQuery(graphql`
    query useLatestBlogPostsQuery {
      allWpPost(sort: { fields: date, order: DESC }) {
        edges {
          node {
            excerpt
            uri
            title
          }
        }
      }
    }
  `)

  return data
}

export default useLatestBlogPost
