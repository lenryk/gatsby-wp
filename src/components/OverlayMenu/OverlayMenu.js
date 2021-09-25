import React from "react"
import { Link } from "gatsby"
import { Overlay } from "./OverlayMenu.styles"
import InvertedLogo from "../../images/logo-inverted.svg"
import CloseButton from "../../images/close_btn.svg"
import { useMenuQuery } from "../../hooks/useMenuQuery"

const OverlayMenu = ({ menuOpen, callback }) => {
  const { wpMenu } = useMenuQuery()

  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <img className="inverted-logo" src={InvertedLogo} alt="white-logo" />
        <ul className="overlayMenu">
          {wpMenu.menuItems.nodes.map(menu =>
            !menu.parentId ? (
              <li key={menu.id}>
                <Link to={menu.url} activeClassName="overlayActive">
                  {menu.label}
                </Link>
              </li>
            ) : null
          )}
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img src={CloseButton} alt="close-button" />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
