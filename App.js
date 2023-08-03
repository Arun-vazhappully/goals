import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { GoalInput } from './components/goalInput';
import { GoalItem } from './components/goalItem';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const handleAddGoal = enteredGoal => {
    setGoals(currentGoals => [...currentGoals, { text: enteredGoal, key: Math.random().toString() }]);
    endAddGoalHandler();
  };
  const handleDeleteGoal = key => setGoals(currentGoals => currentGoals.filter(goal => goal.key !== key));
  const startAddGoalHandler = () => setModalIsVisible(true);
  const endAddGoalHandler = () => setModalIsVisible(false);
  return (
    <View style={styles.container}>
      <Button title="Add Goal" onPress={startAddGoalHandler} color={'#5e0acc'} />
      <GoalInput showModal={modalIsVisible} onAddGoal={handleAddGoal} onCancel={endAddGoalHandler} />
      <View style={styles.listContainer}>
        <FlatList
          data={goals}
          renderItem={goal => {
            return <GoalItem text={goal.item.text} id={goal.item.key} onDeleteItem={handleDeleteGoal} />;
          }}
        ></FlatList>
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
  listContainer: {
    flex: 5
  }
});
