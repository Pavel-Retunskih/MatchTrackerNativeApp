import {MatchCard} from "../../../entities/Match/ui/Match";
import {useGetMatchesQuery} from "../../../entities/Match/api/matchesApi";
import {FlatList, StyleSheet, Text, View} from "react-native";
import {useAppSelector} from "../../../app/model/hooks/hooks";
import {MatchFilter} from "../../../app/model/slice/appSlice";

export function MatchesList() {
  const {data, isSuccess, isFetching} = useGetMatchesQuery()

  const filter = useAppSelector(state => state.app.filter)
  const getFilteredMatches = (filter: MatchFilter) => {
    if (filter === "All") {
      return data?.data.matches
    } else {
      return data?.data.matches.filter(({status}) => status === filter)
    }
  }
  return (<>
        {isFetching && <Text>Loading...</Text>}
        {isSuccess && <View style={styles.container}>
          <FlatList
              ItemSeparatorComponent={() => <View style={{height: 10}}/>}
              data={getFilteredMatches(filter)}
              renderItem={({item}) => <MatchCard
                  match={item}/>}/>
        </View>}
      </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
})