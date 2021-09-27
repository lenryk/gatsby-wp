import React from "react"
import { Link } from "gatsby"
import {
  CTAImage,
  StyledImg,
  CTAImageText,
  CTAImageTextWrapper,
} from "./CTA.styles"
import { GatsbyImage } from "gatsby-plugin-image"

const CTA = ({ img, link, text }) => {
  return (
    <CTAImage>
      <GatsbyImage image={img} alt="cta image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
}

export default CTA
