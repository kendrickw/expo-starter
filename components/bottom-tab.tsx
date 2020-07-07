import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab } from '@ui-kitten/components';
import { StyleSheet } from 'react-native';

import evaIcon from './base/eva-icon';
import Home from './home';
import User from './user';
import Order from './order';

const { Navigator, Screen } = createBottomTabNavigator();

const styles = StyleSheet.create({
  bottomNavigation: {
    marginVertical: 8,
  },
});

const BottomTabBar: React.FC<BottomTabBarProps> = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={styles.bottomNavigation}
  >
    <BottomNavigationTab title="HOME" icon={evaIcon('home-outline')} />
    <BottomNavigationTab title="USERS" icon={evaIcon('person-outline')} />
    <BottomNavigationTab title="ORDERS" icon={evaIcon('gift-outline')} />
  </BottomNavigation>
);

const BottomTab: React.FC = () => (
  <NavigationContainer>
    <Navigator tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Users" component={User} />
      <Screen name="Orders" component={Order} />
    </Navigator>
  </NavigationContainer>
);

export default BottomTab;
