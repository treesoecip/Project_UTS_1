import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'native-base';
import { TabNavigator } from 'react-navigation';

import HomeTab from './HomeTab';
import PengumumanTab from './PengumumanTab';
import KegiatanTab from './KegiatanTab';
import MahasiswaTab from './MahasiswaTab';

export default class menu extends React.Component {

  static navigationOptions= {
    headerLeft: <Icon
      name='menu'
      style={{ paddingLeft: 10 }}
    />,
    title: 'Presensi Mahasiswa',
    headerRight: <Icon
      name='md-settings'
      style={{ paddingRight: 10 }}
    />
  }


  render() {
    return (
      <View style={styles.container}>
        <AppTabNavigator />

      </View>
    );
  }
}


const AppTabNavigator = TabNavigator({
    HomeTab: {
      screen: HomeTab
    },
    KegiatanTab: {
      screen: KegiatanTab
    },
    MahasiswaTab: {
      screen: MahasiswaTab
    },
    PengumumanTab: {
      screen: PengumumanTab
    },
},


)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
