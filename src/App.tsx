import GlobalStyles from "./styles/GlobalStyles";

// Импорты лекций
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
// import Lesson09 from "./lessons/Lesson09/Lesson09";
import Lesson11 from "./lessons/Lesson11/Lesson11";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Лекция 7. Map, TS */}
      {/* <Lesson07 /> */}
      {/* Лекция 8. Styling components */}
      {/* <Lesson08 /> */}
      {/* Лекция 9. Контроль компонентов */}
      {/* <Lesson09 /> */}
      {/* Лекция 11. Формик */}
      <Lesson11 />
    </>
  );
}

export default App;
