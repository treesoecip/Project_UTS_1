import React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import PengumumanTab from './PengumumanTab';
// Version can be specified in package.json

class Pertama extends React.Component {

  redirect() {
    //this.props.navigation.navigate('PengumumanTab')
    Alert.alert('ascbk');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Intro 1</Text>

      <Button
        onPress={() => this.props.navigation.navigate('Intro2')}
        title="Next"
        color='purple'
      />
      </View>
    );
  }
}

class Kedua extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Intro 2</Text>

        <Button
          onPress={() => this.props.navigation.navigate('Intro3')}
          title="Next"
          color='purple'
        />
        </View>
    );
  }
}

class Intro3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Intro 3</Text>

        <Button
          onPress={() => this.props.navigation.navigate('Intro4')}
          title="Next"
          color='purple'
        />
        </View>
    );
  }
}

class Intro4 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Intro 4</Text>

        <Button
          onPress={() => this.props.navigation.navigate('HomeTab')}
          title="Open APP"
          color='purple'
        />
      </View>
    );
  }
}

const navigasi = StackNavigator(
  {
    PengumumanTab: { screen: PengumumanTab }
  })

export default TabNavigator(
  {
    Intro1: { screen: Pertama },
    Intro2: { screen: Kedua },
    Intro3: { screen: Intro3 },
    Intro4: { screen: Intro4 },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Intro1') {
          iconName = `circle${focused ? '' : '-o'}`;
        } else if (routeName === 'Intro2') {
          iconName = `circle${focused ? '' : '-o'}`;
        } else if (routeName === 'Intro3') {
          iconName = `circle${focused ? '' : '-o'}`;
        } else if (routeName === 'Intro4') {
          iconName = `circle${focused ? '' : '-o'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <FontAwesome name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarVisible: false,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: 'white',
  },
    },
    animationEnabled: false,

  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  //  justifyContent: 'center',
    justifyContent: 'space-around',

  },
});
