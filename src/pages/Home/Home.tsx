import { useContext } from "react";
import { LayoutContext } from "../../components/Layout/Layout";
import { HomePage, PageInfo, Title } from "./styles";

function Home() {
  const name = useContext(LayoutContext);
  
  return (
    <HomePage>
      <Title>Welcome to the React App</Title>
      <PageInfo>Open lecture example</PageInfo>
      <PageInfo>{name}</PageInfo>
    </HomePage>
  );
}

export default Home;
