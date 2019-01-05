import { createStackNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react'
import Home from './Home';
import ListStaff from './ListStaff';
import ListLayanan from './ListLayanan';
import BuatLayanan from './BuatLayanan';
import AddStaff from './AddStaff';
import Edit from './Edit';

const AppNavigator = createStackNavigator({

  Home: { screen: Home },
  ListStaff: { screen: ListStaff},
  ListLayanan: { screen: ListLayanan},
  BuatLayanan: { screen: BuatLayanan},
  AddStaff: { screen: AddStaff},
  Edit: { screen: Edit},
  
},
  {
    defaultNavigationOptions: {
      title: 'Menu',
       headerTintColor: 'white',
       fontSize:'25',
       fontWeight:'bold',
      headerStyle: {
        backgroundColor: '#40E0D0',
        color:'40E0D0',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        flex:1,
      },
    },
    navigationOptions: {
      tabBarLabel: 'Home!',
    },
  },

 
);

const App = createAppContainer(AppNavigator);

export default App;