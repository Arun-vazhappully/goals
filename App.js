import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const handleAddGoal = () => setGoals(currentGoals => [...currentGoals, enteredGoal]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Course Goal!' onChangeText={setEnteredGoal} />
        <Button title='ADD GOAL' onPress={handleAddGoal} />
      </View>
      <View style={styles.listContainer}>
        {goals.map(goal => (<Text key={goal}>{goal}</Text>))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    width: '70%',
    padding: 8,
    marginRight: 8,
  },
  listContainer: {
    flex: 7
  }
});
