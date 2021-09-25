import { Link } from "gatsby"
import React from "react"
import Logo from "../../images/logo.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Navigation from "../Navigation/Navigation"

export const Header = () => {
  const { site, wpMenu } = useMenuQuery()

  console.log(wpMenu.menuItems.nodes)
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title} />
        </Link>
        <Navigation menu={wpMenu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}

export default Header
