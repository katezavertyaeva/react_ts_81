import GlobalStyles from "./styles/GlobalStyles";

// Импорты лекций
import Lesson07 from "./lessons/Lesson07/Lesson07";
import Lesson08 from "./lessons/Lesson08/Lesson08";

function App() {
  return (
    <>
      <GlobalStyles />
      {/* Лекция 7. Map, TS */}
      <Lesson07 />
      {/* Лекция 8. Styling components */}
      {/* <Lesson08 /> */}
    </>
  );
}

export default App;
