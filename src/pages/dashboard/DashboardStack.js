import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerStructure from '../../navigation';
import Dashboard from './Dashboard';

const Stack = createStackNavigator();
function DashboardStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'OpenSans-SemiBold' //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default DashboardStack;