import {View, Image, Text, StyleSheet} from 'react-native';
import {Player} from '../model/type';
import {StatCard} from "../../../shared/statCard/statCard";

export function PlayerCard({player}: { player: Player }) {
  const {username, kills} = player;

  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 6}}>
          <Image
              source={require('../../../../assets/icons/avatar_global.png')}
              style={{width: 26, height: 26, marginRight: 8}}
          />
          <Text style={{color: '#fff'}}>{username}</Text>
        </View>
        <StatCard title={'Убийств:'} statistic={kills}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: '#101318',
    alignItems: 'center',
  },
});