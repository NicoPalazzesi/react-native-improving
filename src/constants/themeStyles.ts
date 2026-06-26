import { StyleSheet } from "react-native";

export const darkStyles = StyleSheet.create({
    main: {
        backgroundColor: '#242424',
    },
    text: {
        color: 'white',
    },
    input: {
        backgroundColor: '#525252',
        borderColor: '#3B3B3B',
        color: 'white'
    }
});

export const lightStyles = StyleSheet.create({
    main: {
      backgroundColor: '#F2F2F2',
    },
    text: {
        color: 'black',
    },
    input: {
        backgroundColor: '#FFFFFF',
        borderColor: '#DBDBDB',
        color: 'black'
    }
});
