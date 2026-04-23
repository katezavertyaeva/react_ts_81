import { useState, createContext } from "react";

import Section from "../Section/Section";
import { MainCardTitle, MainCardWrapper } from "./styles";
import type { MainCardContextType, UserData } from "./types";

// Шаг 1. Создайм хранилище - контекст, с помощью функции createContext
// export const MainCardContext = createContext<UserData | undefined>(undefined);
export const MainCardContext = createContext<MainCardContextType>({
  data: undefined,
  onDataChange: () => {},
});
// {
// data: userData,
// onDataChange: setUserData
// }

function MainCard() {
  const [userData, setUserData] = useState<UserData | undefined>({
    firstName: "Bart",
    lastName: "Simpson",
    age: 11,
  });

  return (
    // 2 шаг - создаём обертку, которая позволяет положить свои значения в
    // контекст и затем предоставляет доступ к ним всем вложенным компонентам
    <MainCardContext.Provider
      value={{
        data: userData,
        onDataChange: setUserData,
      }}
    >
      <MainCardWrapper>
        <MainCardTitle>Main Card</MainCardTitle>
        <Section />
      </MainCardWrapper>
    </MainCardContext.Provider>
  );
}

export default MainCard;
