import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NavigationDrawerStructure from '../../navigation';
import MechanicalMain from './MechanicalMain';

const Stack = createStackNavigator();
function MechanicalStack({navigation}) {
  return (
    <Stack.Navigator initialRouteName="MechanicalEngineering">
      <Stack.Screen
        name="MechanicalEngineering"
        component={MechanicalMain}
        options={{
          title: 'Mechanical Engineering', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontFamily: 'OpenSans-SemiBold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MechanicalStack;