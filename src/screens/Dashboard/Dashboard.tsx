import { useState } from "react";
import { View, Text } from "react-native";
import { ThemeSwitch } from "../../components";
import IntegerInput from "../../components/IntegerInput/IntegerInput";
import { findBinaryNumberOfGaps } from "../../utils/binary";
import { useTheme } from "../../hooks";
import styles from "./styles";

const Dashboard = () => {
  const [integer, setInteger] = useState('-');
  const [binary, setBinary] = useState('');
  const [numberOfGaps, setNumberOfGaps] = useState(0);

  const {themeStyles} = useTheme()

  const handleOnIntegerChange = (newValue: string) => {
    setInteger(newValue);

    if(newValue.length > 0){
      // Convert integer to binary
      const binaryConverted = parseInt(newValue, 10).toString(2);

      // Save binary converted
      setBinary(binaryConverted);

      //Find and save number of Gaps
      setNumberOfGaps(findBinaryNumberOfGaps(binaryConverted));

      return;
    }

    // If newValue is empty, reset values
    setBinary('-');
    setNumberOfGaps(0);
  };

  return (
    <View style={styles.container}>
      <ThemeSwitch />

      <View style={styles.contentContainer}>
        <IntegerInput value={integer} onChangeValue={handleOnIntegerChange} />
        <Text style={themeStyles.text}>{`Binary: ${binary}`}</Text>
        <Text style={themeStyles.text}>{`Number of Gaps: ${numberOfGaps}`}</Text>
      </View>
    </View>
  );
};

export default Dashboard;
