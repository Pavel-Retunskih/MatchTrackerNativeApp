import React from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {Dropdown} from "./components/dropdown/DropDown";
import {MatchesList} from "./widgets/MatchList/ui/MatchList";
import {useGetMatchesQuery} from "./entities/Match/api/matchesApi";


export const App = () => {
  const {refetch} = useGetMatchesQuery()
  return (
      <View style={styles.container}>
        <Text style={styles.title}>Match Tracker</Text>
        <Dropdown/>
        <View style={styles.button}><Button onPress={() => refetch()} color={'#fff'} title={'Обновить'}/></View>
        <MatchesList/>
        <StatusBar style="auto"/>
      </View>)
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
    gap: 40,
    backgroundColor: '#06080C',
    flex: 1
  },
  title: {
    fontSize: 28,
    color: '#fff'
  },
  button: {
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
