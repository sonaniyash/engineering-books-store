import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ComputerStack from './pages/computer-engineering/ComputerStack';
import MechanicalStack from './pages/mechanical-engineering/MechanicalStack';
import DashboardStack from './pages/dashboard/DashboardStack';

const Drawer = createDrawerNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <NavigationContainer>
          <Drawer.Navigator
            drawerContentOptions={{
              activeTintColor: '#e91e63',
              itemStyle: {marginVertical: 5},
              labelStyle: {fontFamily: 'OpenSans-Regular'},
            }}>
            <Drawer.Screen
              name="Dashboard"
              options={{drawerLabel: 'Home'}}
              component={DashboardStack}
            />
            <Drawer.Screen
              name="ComputerEngineering"
              options={{drawerLabel: 'Computer Engineering'}}
              component={ComputerStack}
            />
            <Drawer.Screen
              name="MechanicalEngineering"
              options={{drawerLabel: 'Mechanical Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="CivilEngineering"
              options={{drawerLabel: 'Civil Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="ChemicalEngineering"
              options={{drawerLabel: 'Chemical Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="ElectricalEngineering"
              options={{drawerLabel: 'Electrical Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="ElectronicEngineering"
              options={{drawerLabel: 'Electronic Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="AutoMobileEngineering"
              options={{drawerLabel: 'Automobile Engineering'}}
              component={MechanicalStack}
            />
            <Drawer.Screen
              name="PetroleumEngineering"
              options={{drawerLabel: 'Petroleum Engineering'}}
              component={MechanicalStack}
            />
          </Drawer.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
