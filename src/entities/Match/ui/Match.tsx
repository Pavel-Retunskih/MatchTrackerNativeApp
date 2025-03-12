import {View, StyleSheet, Pressable} from "react-native";
import {MatchInfo} from "./MatchInfo/MatchInfo";
import {Match} from "../model/type";
import {ArrowOpenIcon} from "../../../../assets/icons/svg/ArrowOpenIcon";
import {useState} from "react";
import {MatchDescription} from "./MatchDescription/MatchDescription";
import ArrowCloseIcon from "../../../../assets/icons/svg/ArrowCloseIcon";

export const MatchCard = ({match}: { match: Match }) => {
  const [open, setOpen] = useState<boolean>(false);
  const {homeTeam, awayTeam, homeScore, awayScore, status} = match

  return <View style={styles.container}>
    <MatchInfo
        awayTeamName={awayTeam.name}
        homeTeamName={homeTeam.name}
        homeScore={homeScore}
        awayScore={awayScore}
        status={status}
    />
    {!open && <Pressable style={styles.openButton} onPress={() => setOpen(true)}><ArrowOpenIcon/></Pressable>}
    {open && (<MatchDescription awayTeam={awayTeam} homeTeam={homeTeam}/>)}
    {open && (<Pressable style={styles.openButton} onPress={() => setOpen(false)}><ArrowCloseIcon/></Pressable>)}
  </View>
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0B0E12',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 8
      },
      openButton: {
        flex: 1,
      }
    }
)