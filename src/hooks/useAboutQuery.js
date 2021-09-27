import { useStaticQuery, graphql } from "gatsby"

export const useAboutQuery = () => {
  const data = useStaticQuery(graphql`
    query useAboutQuery {
      wpPage(databaseId: { eq: 47 }) {
        id
        content
        featuredImage {
          node {
            altText
            localFile {
              publicURL
            }
          }
        }
      }
    }
  `)

  return data
}
