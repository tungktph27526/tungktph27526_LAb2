import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuanLy from './QuanLy';
import About from './About';
const Stack = createNativeStackNavigator();
const Home = (props) => {
  const transDataQuanLy = () => {
    nav.navigate('QuanLy', { list: [...listFood] })
  }
  const nav = props.navigation;
  const listFood = [
    { id: 1, nameUser: 'Nguyen Van A', date: '06/02/2023' },
    { id: 2, nameUser: 'Nguyen Van B', date: '05/02/2023' },
    { id: 3, nameUser: 'Nguyen Van C', date: '07/02/2023' },
  ];
  const transDataAbout = () => {
    nav.navigate('About', { id: 0, name: 'Kieu Thanh Tung', date: '26/09/2003' })
  } 
  return (
    <View style={styles.view}>
      <Image source={{ uri: 'https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=2000',}} 
      style={styles.img} />
      <Button title='sang Quan ly' onPress={transDataQuanLy} />
      <Button title='sang About' onPress={transDataAbout} />
    </View>
  );
}
const App = (props) => {

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name='QuanLy' component={QuanLy} />
        <Stack.Screen name='About' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
const styles = StyleSheet.create({
  img: {
    backgroundColor: '#80DEEA',
    borderRadius: 15,
    width: 150,
    height: 150,
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})


