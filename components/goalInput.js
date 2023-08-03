import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';
import { useState } from 'react';

export const GoalInput = ({ onAddGoal, onCancel, showModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={showModal} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={setEnteredGoal} value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={handleAddGoal} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 8
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
});
