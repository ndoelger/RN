import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default function App() {
  const [goalText, setGoalText] = useState('');

  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (e) => {
    setGoalText(e);
  };

  const addGoalHandler = (e) => {
    setCourseGoals((currentCourseGoals) => [...currentCourseGoals, goalText]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <FlatList
        data={courseGoals}
        renderItem={(itemData) => {
          return (
            <Text style={styles.goal} key={itemData.index}>
              {itemData.item}
            </Text>
          );
        }}
        // For unique key
        // keyExtractor={(item, index) => {
        //   return item.id;
        // }}
      />

      {/* Alternate option */}
      {/* <ScrollView> 
        {courseGoals.map((goal, i) => (
          <Text style={styles.goal} key={i}>{goal}</Text>
        ))}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    height: '100%',
  },
  goal: {
    fontSize: 50,
  },
});
