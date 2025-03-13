import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {MatchesList} from "./widgets/MatchList/ui/MatchList";
import {useGetMatchesQuery} from "./widgets/MatchList/api/matchesApi";
import {MatchesFilterDropdown} from "./features/MatchesFilter/ui/MatchesFilterDropdown";


export const App = () => {
  const {refetch} = useGetMatchesQuery()
  return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Match Tracker</Text>
        <MatchesFilterDropdown/>
        <View style={styles.button}><Button onPress={() => refetch()} color={'#fff'} title={'Обновить'}/></View>
        <MatchesList/>
        <StatusBar style="auto"/>
      </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#06080C',
    flex: 1
  },
  title: {
    fontSize: 28,
    color: '#fff'
  },
  button: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 18,
    color: '#fff',
    height: 56,
    width: '100%',
    borderRadius: 8,
    backgroundColor: '#EB0237',
  },
  dropdown: {
    height: 56,
    width: 396,
    backgroundColor: '#fff',

  }
});
