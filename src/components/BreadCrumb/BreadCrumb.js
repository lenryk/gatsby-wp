import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./BreadCrumb.styles"

const BreadCrumb = ({ parent }) => {
  return (
    <Wrapper>
      <Link to="/">
        <span>Home</span>
        <span className="divider">/</span>
        {parent ? (
          <>
            <Link to={parent.uri}>
              <span dangerouslySetInnerHTML={{ __html: parent.title }}></span>
            </Link>
            <span className="divider">/</span>
          </>
        ) : null}
      </Link>
    </Wrapper>
  )
}

export default BreadCrumb
