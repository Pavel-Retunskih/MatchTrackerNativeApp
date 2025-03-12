import {View, Image, Text, StyleSheet} from 'react-native';
import {Player} from '../model/type';

export function PlayerCard({player}: { player: Player }) {
  const {username, kills} = player;

  return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
              source={require('../../../../assets/icons/avatar_global.png')}
              style={{width: 26, height: 26, marginRight: 8}} // Добавлен marginRight для отступа
          />
          <Text style={{color: '#fff'}}>{username}</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: '#fff'}}>Убийств:</Text>
          <Text style={{color: '#fff', marginLeft: 4}}>{kills}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 7,
    backgroundColor: '#101318',
    gap: 6,
  },
});