import NavigationLink from "../NavigationLink/NavigationLink";
import {
  Footer,
  Header,
  LayoutComponent,
  Logo,
  Main,
  NavContainer,
} from "./styles";
import type { LayoutProps } from "./types";

function Layout({ children }: LayoutProps) {
  return (
    <LayoutComponent>
      <Header>
        <Logo></Logo>
        <NavContainer>
          <NavigationLink to="/" linkName="Home" />
          <NavigationLink to="/about" linkName="About" />
          <NavigationLink to="/users" linkName="Users" />
        </NavContainer>
      </Header>
      <Main>{children}</Main>
      <Footer>
        <Logo></Logo>
      </Footer>
    </LayoutComponent>
  );
}

export default Layout;
