import {useCallback, useRef, useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, Animated} from "react-native";
import FlatList = Animated.FlatList;
import {useAppDispatch} from "../../app/model/hooks/hooks";
import {changeFilter, MatchFilter} from "../../app/model/slice/appSlice";


export const Dropdown = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState<{ label: string, value: MatchFilter }>({label: 'Все статусы', value: 'All'})
  const dispatch = useAppDispatch()
  const toggleOpen = useCallback(() => setOpen(prev => !prev), [])

  const selectValue = useCallback((item: { label: string, value: MatchFilter }) => {
    if (item) {
      setValue(item)
      setOpen(false)
      dispatch(changeFilter(item.value))
    }
  }, [])

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleOpen}>
          <Text style={styles.title}>{value.label}</Text>
        </TouchableOpacity>
        {open && (<View style={styles.options}>
          <FlatList<{ label: string, value: MatchFilter }>
              keyExtractor={item => item.value}
              data={[
                {label: 'Все статусы', value: 'All',},
                {label: 'Live', value: 'Ongoing'},
                {label: 'Finished', value: 'Finished'},
                {label: 'Match preparing', value: 'Scheduled'},
              ]}
              renderItem={({item}) => (
                  <TouchableOpacity style={styles.optionItem} onPress={() => selectValue(item)}>
                    <Text style={styles.title}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
              )}/></View>)}

      </View>


  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  button: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#0B0E12',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    color: '#fff'
  },
  options: {
    backgroundColor: '#0F1318',
    width: 376,
    marginTop: 8,
    paddingVertical: 6,
  },
  optionItem: {
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 18,
  }
});
