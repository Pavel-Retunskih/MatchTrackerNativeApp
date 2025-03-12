import {Image, StyleSheet, Text, View} from "react-native";

type Props = {
  teamName: string
  isReverse?: boolean
}

export function TeamInfo({teamName, isReverse}: Props) {
  const dynamicStyles = StyleSheet.create({
    container: {
      flexDirection: isReverse ? 'row-reverse' : 'row',
    }
  })

  return <View style={[styles.container, dynamicStyles.container]}>
    <Image width={28} height={28}
           source={require('../../../../../../assets/icons/team_icon.png')}/>
    <Text style={styles.text}>{teamName}</Text>
  </View>
}

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 14
  },
  container: {
    alignItems: 'center',
    gap: 6
  }
})