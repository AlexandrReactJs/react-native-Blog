import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu'
import { Navigation } from './Screens/Navigation';
import { store } from './Redux/store';
import { Provider } from 'react-redux';

export default function App() {

  const [menuOpne, setMenuOpen] = React.useState(false)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {
          menuOpne ? <Menu setMenuOpen={setMenuOpen} /> : <Header setMenuOpen={setMenuOpen} />
        }

        <Navigation />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#edeef0',
    marginTop: 45

  },


});
