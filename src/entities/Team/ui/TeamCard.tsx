import {Team} from "../model/type";
import {View, FlatList, Text, StyleSheet} from 'react-native'
import {PlayerCard} from "../../Player/ui/PlayerCard";

export function TeamCard({team}: { team: Team }) {
  const {players, points, place, total_kills} = team

  return (
      <View style={{gap: 8}}>
        <FlatList data={players}
                  style={{flexDirection: 'row', gap: 8, justifyContent: 'space-between'}}
                  keyExtractor={({username}) => username}
                  renderItem={({item}) => <PlayerCard player={item}/>}></FlatList>
        <View style={styles.container}>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff'}}>Points:</Text>
            <Text style={{color: '#fff'}}>{points}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff'}}>Место:</Text>
            <Text style={{color: '#fff'}}>{place}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#fff'}}>Всего убийств:</Text>
            <Text style={{color: '#fff'}}>{total_kills}</Text>
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#101318',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 14
  }
})