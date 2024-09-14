import {createDrawerNavigator} from '@react-navigation/drawer';
import {Dimensions, View} from 'react-native';
import {Text} from 'react-native-svg';
import TabNavigation from './TabNavigation';
import CustomSidebarMenu from '../component/CustomSidebarMenu';

const Drawer_stack = createDrawerNavigator(props:any);

function DrawerMenuNavigation() {
  return (
    <Drawer_stack.Navigator
      initialRouteName="TabNavigation"
      backBehavior="history"
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: Dimensions.get('window').width / 1.2},
        drawerType: 'front',
        swipeEnabled: false,
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer_stack.Screen name="TabNavigation" component={TabNavigation} />
    </Drawer_stack.Navigator>
  );
}

export default DrawerMenuNavigation;
