import {Team} from "../model/type";
import {View, FlatList, StyleSheet} from 'react-native'
import {PlayerCard} from "../../Player/ui/PlayerCard";
import {StatCard} from "../../../shared/statCard/statCard";

export function TeamCard({team}: { team: Team }) {
  const {players, points, place, total_kills} = team

  return (
      <View style={{flex: 1}}>
        <FlatList data={players}
                  style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}
                  keyExtractor={({username}) => username}
                  renderItem={({item}) => <PlayerCard player={item}/>}></FlatList>
        <View style={styles.container}>
          <StatCard title={'Points:'} statistic={points}/>
          <StatCard title={'Место:'} statistic={place}/>
          <StatCard title={'Всего убийств:'} statistic={total_kills}/>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#101318',
    justifyContent: 'space-around',
    paddingHorizontal: 12,
    paddingVertical: 14
  }
})