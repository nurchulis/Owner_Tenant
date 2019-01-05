import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Props } from 'react-native'
import { ListItem, chevron, Header, Card } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';



class AddStaff extends Component {
     static navigationOptions = ({ navigation, navigationOptions }) => {
    const { params } = navigation.state;

    return {
      title: params ? params.otherParam : 'A Nested Details Screen',
      /* These values are used instead of the shared configuration! */
      headerStyle: {
        backgroundColor: navigationOptions.headerTintColor,
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize:25,
        textAlign:'center',
        flex:1,
        marginLeft:'-15%',
      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };
  
   render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity   onPress={() => {
            this.props.navigation.navigate('BuatLayanan', {
              otherParam: 'Buat Layanan Baru',
            });
          }} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        

          <Text style={styles.judul}>BRI Cabang Pusat</Text>
        
        <Image
          style={{width: 250, height: 250}}
             source={require('../assets/Barcode.png')}
        />
           <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => {}} 
                >
                <Text style={styles.customBtnText}>Scan Barcode ini</Text>
                </TouchableOpacity>
          <Text style={styles.bawah}>Untuk mengundang staff baru</Text>

        </View>
      )
   }
}
export default AddStaff
const styles = StyleSheet.create ({
     container: {
      backgroundColor:'white',
      flex:1,
      top:0,
      alignItems: 'center',
      justifyContent: 'center',


   },
      judul: {
        position:'relative',
        width:300,
        height:49,
        textAlign: 'center',
        fontSize:20,
        fontWeight:'bold',
      },
        customBtnText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: "#fff",
        textAlign:'center'
    },

    bawah:{
         position:'relative',
        width:300,
        height:49,
        textAlign: 'center',
       top:20,
    },
  /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#40E0D0",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    top:10,
    },


       fab: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 30,
    bottom:20,
    elevation: 8,
    
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
     
})