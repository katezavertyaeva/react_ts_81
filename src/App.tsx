import { BrowserRouter, Route, Routes } from "react-router-dom";
import { v4 } from "uuid";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import { routesData } from "./routes/data";
import type { RouteObj } from "./routes/types";


function App() {
  const routes = routesData.map((route: RouteObj) => {
    return <Route key={v4()} path={route.path} element={route.element}/>;
  });

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент */}
          {/* <Route path="/" element={<Home />} /> */}
          {routes}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
