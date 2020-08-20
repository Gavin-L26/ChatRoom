import React from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

state = { email: "", password: "", errorMessage: null };
handleSignup = () => {
  // TODO: Firebase stuff...
  console.log("handleSignup");
};

const SignupScreen = (props) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  //const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
  };

  return (
    <View style={styles.screen}>
      <Text> ~~ This is a Sign up Screen ~~ </Text>

      {this.state.errorMessage && (
        <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
      )}

      <TextInput
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={(email) => this.setState({ email })}
        value={this.state.email}
      />

      <TextInput
        secureTextEntry
        style={styles.textInput}
        autoCapitalize="none"
        placeholder="Password"
        onChangeText={(password) => this.setState({ password })}
        value={this.state.password}
      />

      <Button title="Sign Up" onPress={this.handleSignup} />

      <Button
        title="Already have an account? Login"
        onPress={() => props.navigation.navigate("Login")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SignupScreen;
