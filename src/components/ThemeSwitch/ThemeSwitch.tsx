import { Switch, Text, View } from "react-native";
import useTheme from "../../hooks/useTheme";
import styles from './styles';

const ThemeSwitch = () => {
  const { theme, setTheme, THEMES , themeStyles, isDarkMode } = useTheme();

  const handleToggleChange = () => {
    setTheme(theme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK);
  };

  return (
    <View style={styles.container}>
      <Switch
        value={isDarkMode}
        onValueChange={handleToggleChange}
      />
      <Text style={themeStyles.text} >{isDarkMode ? 'Dark Mode' : 'Light Mode'}</Text>
    </View>
  );
};

export default ThemeSwitch;
