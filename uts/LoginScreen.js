import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Login Screen</Text>
        <Button
          onPress={() => this.props.navigation.navigate('HomeTab')}
          title=" Home Screen"
          color='purple'
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
