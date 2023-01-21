import { createContext, useState } from "react";

const NavigationContext = createContext({});

function NavigationProvider({ children }) {
  const [navigation, setNavigation] = useState();

  return (
    <NavigationContext.Provider value={{ navigation, setNavigation }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, NavigationProvider };
