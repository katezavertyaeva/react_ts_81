import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyles from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";

// Импорты лекций
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
// import Lesson11 from "./lessons/Lesson11/Lesson11";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Users from "./pages/Users/Users";
import User from "./pages/Users/components/User/User";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      {/* Лекция 7. Map, TS */}
      {/* <Lesson07 /> */}
      {/* Лекция 8. Styling components */}
      {/* <Lesson08 /> */}
      {/* Лекция 9. Контроль компонентов */}
      {/* <Lesson09 /> */}
      {/* Лекция 11. Формик */}
      {/* <Lesson11 /> */}
      <Layout>
        {/* Routes - собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент, в который передаётся маршрут и контент */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user" element={<User />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
