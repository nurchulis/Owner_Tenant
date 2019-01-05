import React from 'react';
import { View, Text, Button, StatusBar, StyleSheet, TouchableOpacity } from 'react-native';

import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; 
import Icon from 'react-native-vector-icons/Ionicons';

class Home extends React.Component {

  render() {
    return (
      
       <View style={{ flex: 1, alignItems: 'center' }}>
      
          <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => {
                this.props.navigation.navigate('ListStaff', {
                otherParam: 'Daftar Staff',
                });
                }}
                >
               
                <Text style={styles.customBtnText}>Daftar Staff</Text>
                </TouchableOpacity>

          <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => {
                this.props.navigation.navigate('ListLayanan', {
                otherParam: 'Daftar Layanan',
                });
                }}
                >
                <Text style={styles.customBtnText}>Daftar Layanan</Text>
                </TouchableOpacity>


          <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => {
                this.props.navigation.navigate('Edit', {
                otherParam: 'Edit Profil Instansi',
                });
                }}
                >
                <Text style={styles.customBtnText}>Profile</Text>
                </TouchableOpacity>


      
      </View>
    );
  }  
}



export default createAppContainer(Home);
const styles = StyleSheet.create ({

ButtonMenu:{

},
customBtnText: {
    fontSize: 27,
    fontWeight: 'bold',
    color: "#40E0D0",
    textAlign:'center'

    },

  /* Here style the background of your button */
customBtnBG: {
    margin:30, 
    backgroundColor: "#ecf0f1",
    paddingHorizontal: 30,
    paddingVertical: 5,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
     justifyContent: 'center',
                width:'98%',
                height:60,

    }


})  