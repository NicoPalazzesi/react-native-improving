import { useMemo } from "react";
import { Appearance, useColorScheme } from "react-native";
import { darkStyles, lightStyles } from "../constants/themeStyles";

enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

const useTheme = () => {
  const theme = Appearance.getColorScheme();

  const setTheme = (newTheme: THEMES.DARK | THEMES.LIGHT) => {
    Appearance.setColorScheme(newTheme);
  };

  const themeStyles = useMemo(() => theme === THEMES.DARK ? darkStyles : lightStyles , [theme]);

  const isDarkMode = useColorScheme() === 'dark';

  return {
    theme,
    setTheme,
    THEMES,
    themeStyles,
    isDarkMode,
  };
};

export default useTheme;