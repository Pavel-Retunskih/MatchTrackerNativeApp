import {Text, View, StyleSheet} from "react-native";
import {TeamCard} from "../../../Team/ui/TeamCard";
import {Team} from "../../../Team/model/type";

type Props = {
  homeTeam: Team
  awayTeam: Team
}

export function MatchDescription({awayTeam, homeTeam}: Props) {

  return (
      <View style={{marginTop: 16, width: '100%'}}>
        <TeamCard team={homeTeam}/>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.before}/>
          <Text style={{color: '#313A47', textAlign: 'center', paddingHorizontal: 10}}>VS</Text>
          <View style={styles.after}/>
        </View>
        <TeamCard team={awayTeam}/>
      </View>
  )
}

const styles = StyleSheet.create({
  before: {
    width: '44%',
    height: 1,
    backgroundColor: '#313A47',
    position: 'relative',
    top: '50%'
  },
  after: {
    width: '44%',
    height: 1,
    backgroundColor: '#313A47',
    position: 'relative',
    top: '50%'
  }
})