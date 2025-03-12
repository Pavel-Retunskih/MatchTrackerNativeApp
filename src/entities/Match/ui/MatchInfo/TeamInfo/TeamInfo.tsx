import {StyleSheet, Text, View} from "react-native";

type Props = {
  teamName: string
  isReverse?: boolean
}

export function TeamInfo({teamName, isReverse}: Props) {

  return <View>
    <Text style={styles.text}>{teamName}</Text>
  </View>
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 16
  }
})