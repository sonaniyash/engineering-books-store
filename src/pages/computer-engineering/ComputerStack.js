import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerStructure from '../../navigation';
import ComputerMain from './ComputerMain';

const Stack = createStackNavigator();
function ComputerStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="ComputerEngineering">
      <Stack.Screen
        name="ComputerEngineering"
        component={ComputerMain}
        options={{
          title: 'Computer Engineering', //Set Header Title
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

export default ComputerStack;