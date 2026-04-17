import GlobalStyles from "./styles/GlobalStyles";

// Импорты лекций
// import Lesson07 from "./lessons/Lesson07/Lesson07";
// import Lesson08 from "./lessons/Lesson08/Lesson08";
import Lesson09 from "./lessons/Lesson09/Lesson09";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Лекция 7. Map, TS */}
      {/* <Lesson07 /> */}
      {/* Лекция 8. Styling components */}
      {/* <Lesson08 /> */}
      {/* Лекция 9. Контроль компонентов */}
      <Lesson09 />
    </>
  );
}

export default App;
