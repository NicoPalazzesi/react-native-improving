import { TextInput } from "react-native";
import { useTheme } from "../../hooks";
import { NUMBER_REGEX } from "../../constants/regex";
import styles from "./styles";

interface IntegerInputProps {
  value: string;
  onChangeValue: (text: string) => void;
}

const IntegerInput = ({ value, onChangeValue }: IntegerInputProps) => {
  const { themeStyles, isDarkMode } = useTheme();

  const handleChangeValue = (newValue: string) => {
    const isAddingNewDigit = newValue.length > value.length;

    if (isAddingNewDigit) {
      // If the new value is not a number, return
      if (!NUMBER_REGEX.test(newValue)) {
        return;
      }
    }

    onChangeValue(newValue);
  };
  return (
    <TextInput
      keyboardType="numeric"
      value={value}
      onChangeText={handleChangeValue}
      style={[themeStyles.input, styles.input]}
      selectionColor={ isDarkMode ? '#7393B3' : undefined }
    />
  );
};

export default IntegerInput;