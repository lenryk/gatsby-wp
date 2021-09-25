import React from "react"
import { Link } from "gatsby"
import {
  CTAImage,
  StyledImg,
  CTAImageText,
  CTAImageTextWrapper,
} from "./CTA.styles"

const CTA = ({ img, link, text }) => {
  return (
    <CTAImage>
      <StyledImg image={img} alt="cta image" />
      <Link to={link}>
        <CTAImageTextWrapper>
          <CTAImageText>{text}</CTAImageText>
        </CTAImageTextWrapper>
      </Link>
    </CTAImage>
  )
}

export default CTA
