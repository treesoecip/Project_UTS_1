import React from 'react';
import { StackNavigator } from 'react-navigation';
import HomeTab from './HomeTab';
import Intro from './Intro';


export default class menu extends React.Component {
  render() {
    return (
      <Navigasi />
    );
  }
}

export const Navigasi = StackNavigator({
  Intro: {
    screen: Intro
  },
  HomeTab: {
    screen: HomeTab
  }

})
