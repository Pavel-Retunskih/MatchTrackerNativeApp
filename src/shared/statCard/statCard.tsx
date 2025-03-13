import {Text, View} from "react-native";

type Props = {
  title: string
  statistic: number | string
}

export const StatCard = ({title, statistic}: Props) => {

  return <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{color: '#FAFAFA66', fontSize: 12}}>{title}</Text>
    <Text style={{color: '#fff', marginLeft: 8, minWidth: 20, textAlign: 'center'}}>{statistic}</Text>
  </View>
}