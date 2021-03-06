import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class App extends React.Component {
  state = {
    inputValue: "",
    todos: [],
  };

  onChangeText = (val) => {
    this.setState({
      inputValue: val,
    });
  };

 

  addItem = () => {
    if (this.state.inputValue !== '') {
      this.setState(prevState => {
        const newToDo = {
          title: this.state.inputValue,
          createdAt: Date.now(),
        };
        
        const todos = this.state.todos.concat(newToDo);

        this.setState({
          todos: todos,
        });
      });
    }
  };

  render() {
    const todos = this.state.todos.map((todo, key) => (
      <View key={key} style={{ flexDirection: "row", alignItems: 'flex-start', marginTop: 20 }}>
        <TouchableOpacity
          style={{
            width: 20,
            height: 20,
            borderRadius: 15,
            borderWidth: 3,
            borderColor: "black",
            margin: 15,
          }}
        ></TouchableOpacity>
        <Text
          style={{
            paddingLeft: 5,
            marginTop: 10,
            fontSize: 28,
          }}
        >
          {todo.title}
        </Text>
      </View>
    ));
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.inputValue}
          onChangeText={this.onChangeText}
          onSubmitEditing={this.addItem}
          style={styles.input}
          placeholder="Add a to-do item..."
          multiline={true}
          autoCapitalize="sentences"
          maxLength={70}
          blurOnSubmit={true}
        ></TextInput>
        <View>{todos}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  input: {
    color: "black",
    paddingTop: 15,
    paddingRight: 25,
    paddingLeft: 15,
    fontSize: 34,
    marginTop: 30,
  },
});
