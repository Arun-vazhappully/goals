import { StyleSheet, View, TextInput, Button, Modal, Image } from 'react-native';
import { useState } from 'react';

export const GoalInput = ({ onAddGoal, onCancel, showModal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const handleAddGoal = () => {
    onAddGoal(enteredGoal);
    setEnteredGoal('');
  };

  return (
    <Modal visible={showModal} animationType="slide" presentationStyle="pageSheet" statusBarTranslucent={true}>
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../assets/images/goal.png')} />
        <TextInput style={styles.textInput} placeholder="Your Course Goal!" onChangeText={setEnteredGoal} value={enteredGoal} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="ADD GOAL" onPress={handleAddGoal} color="#5e0acc" />
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
    backgroundColor: '#311b6b',
    padding: 16
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    width: '100%',
    padding: 16,
    borderRadius: 6
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row'
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  image: {
    height: 100,
    width: 100,
    margin: 20
  }
});
