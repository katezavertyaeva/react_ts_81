import { useContext } from "react";

import { AboutPage, PageInfo, Title } from "./styles";
import { LayoutContext } from "../../components/Layout/Layout";

function About() {
  const name = useContext(LayoutContext);

  return (
    <AboutPage>
      <Title>About page</Title>
      <PageInfo>About page info</PageInfo>
      <PageInfo>{name}</PageInfo>
    </AboutPage>
  );
}

export default About;
