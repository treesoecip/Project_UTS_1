import React from 'react';
import { Text, View } from 'react-native';
//import { TabNavigator } from 'react-navigation'; // Version can be specified in package.json

export default class KegiatanTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Kegiatan</Text>
      </View>
    );
  }
}
