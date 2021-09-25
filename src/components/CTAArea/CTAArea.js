import React from "react"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import CTA from "../CTA/CTA"
import { Wrapper } from "./CTAArea.styles"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  return (
    <Wrapper>
      {new Array(3).fill("").map((e, i) => (
        <CTA
          key={i}
          image={
            cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
              .gatsbyImageData
          }
          link={cta.ACF_HomePage[`cta${i + 1}Link`]}
          text={cta.ACF_HomePage[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}

export default CTAArea
