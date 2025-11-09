"use client"

import { createContext, useContext } from "react";

  const defaultTheme = {
    colors: {
      primary: "#fcba03",
      secondary: "#62fc03",
    },
  };

  const ThemeContext = createContext(null);




export default function ThemeProvider({children}) {

    return <ThemeContext value={defaultTheme}>{children}</ThemeContext>
}


export const useTheme = () => useContext(ThemeContext)