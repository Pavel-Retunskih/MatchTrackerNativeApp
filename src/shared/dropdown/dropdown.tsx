import {useCallback, useState} from "react";
import {StyleSheet, View, Text, TouchableOpacity, FlatList, ViewProps} from "react-native";

type Item<T> = {
  label: string
  value: T
}

type Props<T> = {
  data: Array<Item<T>>;
  defaultItem: Item<T>;
  onChange: (value: Item<T>) => void;
} & ViewProps
export const Dropdown = <T extends unknown>({data, defaultItem, onChange}: Props<T>) => {
  const [open, setOpen] = useState(false)
  const [item, setItem] = useState<Item<T>>(defaultItem)
  const toggleOpen = useCallback(() => setOpen(prev => !prev), [])

  const selectValue = useCallback((item: Item<T>) => {
    if (item) {
      setItem(item)
      onChange(item)
      setOpen(false)
    }
  }, [])

  return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={toggleOpen}>
          <Text style={styles.title}>{item.label}</Text>
        </TouchableOpacity>
        {open && (<View style={styles.options}>
          <FlatList
              keyExtractor={item => item.value as string}
              data={data}
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
    marginTop: 14
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
