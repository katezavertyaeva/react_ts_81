import Content from "../Content/Content"
import { SectionTitle, SectionWrapper } from "./styles"
// import type { SectionProps } from "./types"

function Section() {
  return (
    <SectionWrapper>
      <SectionTitle>Section Block</SectionTitle>
      <Content/>
    </SectionWrapper>
  )
}

export default Section
