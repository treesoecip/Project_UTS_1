import React from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Version can be specified in package.json
import { TabNavigator, TabBarBottom } from 'react-navigation';
 // Version can be specified in package.json
import Kegiatan from './KegiatanTab';
import Pengumuman from './PengumumanTab';
import Mahasiswa from './MahasiswaTab';


class HomeTab extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
      </View>
    );
  }
}

export default TabNavigator(
  {
    Home: {
      screen: HomeTab,
      navigationOptions: {
        title: 'Presensi Mahasiswa',
        textAlign: 'center'
      }
     },
    Kegiatan: {
      screen: Kegiatan,
      navigationOptions: {
        title: ' Kegiatan',
        textAlign: 'center',

      }
     },
    Pengumuman: {
      screen: Pengumuman,
      hideNavbar: true,
      navigationOptions: {
        title: ' Pengumuman',
        textAlign: 'center'
      }
     },
    Mahasiswa: {
      screen: Mahasiswa,
      navigationOptions: {
        title: ' Data Mahasiswa',
        textAlign: 'center'
      } },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;
        } else if (routeName === 'Kegiatan') {
          iconName = `ios-briefcase${focused ? '' : '-outline'}`;
        } else if (routeName === 'Pengumuman') {
          iconName = `ios-notifications${focused ? '' : '-outline'}`;
        } else if (routeName === 'Mahasiswa') {
          iconName = `ios-contact${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
    animationEnabled: false,
  }
);
