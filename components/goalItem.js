import { StyleSheet, View, Text, Pressable } from 'react-native';

export const GoalItem = ({ text, id, onDeleteItem }) => {
  return (
    <View style={styles.listItem}>
      <Pressable onPress={onDeleteItem.bind(this, id)} android_ripple={{ color: '#dddddd' }} style={({ pressed }) => pressed && styles.pressedItem}>
        <Text style={styles.itemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#5e0acc'
  },
  itemText: {
    color: 'white',
    padding: 8
  },
  pressedItem: {
    opacity: 0.5
  }
});
