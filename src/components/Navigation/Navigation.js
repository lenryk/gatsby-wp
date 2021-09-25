import React from "react"
import { Link } from "gatsby"
import { Wrapper } from "./Navigation.styles"

const Navigation = ({ menu }) => {
  return (
    <Wrapper>
      <ul>
        {menu.map(menuLink =>
          !menuLink.parentId ? (
            <li key={menuLink.id}>
              <Link to={menuLink.url} activeClassName="nav-active">
                {menuLink.label}
                {menuLink.childItems.nodes.length !== 0 && <div>&#8964;</div>}
              </Link>
              {menuLink.childItems.nodes.length !== 0 ? (
                <ul>
                  {menuLink.childItems.nodes.map(childItem => (
                    <Link to={childItem.url} activeClassName="nav-active">
                      {childItem.label}
                    </Link>
                  ))}
                </ul>
              ) : null}
            </li>
          ) : null
        )}
      </ul>
    </Wrapper>
  )
}

export default Navigation
