import React, { Component } from 'react'
import { Text, Dimensions,KeyboardAvoidingView, View, containerStyle, TouchableOpacity,TextInput, Image, StyleSheet, ScrollView, Props } from 'react-native'
import { ListItem,  Button, chevron, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height;

class BuatLayanan extends Component {
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
        marginLeft:-30,

      },
      headerTintColor: navigationOptions.headerStyle.backgroundColor,
    };
  };

  
   render() {
      return (
            <View style={styles.container}>
      <View style={styles.aturInput}>
      
            <KeyboardAvoidingView  behavior="padding" enabled>

      <Text style={styles.Layanan}>Nama Layanan</Text>
      <TextInput
          style={{height: 40}}
          underlineColorAndroid="true"
        />
        <Text style={styles.Layanan}>Jumlah Loket</Text>
      <TextInput
          style={{height: 40}}
          underlineColorAndroid="true"
        />
      <Text style={styles.Layanan}>Maksimal antrian</Text>
      <TextInput
          style={{height: 40}}
          underlineColorAndroid="true"
        />

             </KeyboardAvoidingView>
      </View>


              <View style={styles.buttonContainer}>
                <TouchableOpacity
                style={styles.customBtnBG}
                onPress={() => {}} 
                >
                <Text style={styles.customBtnText}>Simpan</Text>
                </TouchableOpacity>
              </View>
            </View>
      )
   }
}
export default BuatLayanan
const styles = StyleSheet.create ({
   container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    Layanan: {
    fontSize:20,
    color:'grey',
    },
    aturInput: {
    width: width,
    padding:30,  
    marginTop:30,
    marginLeft:30,
    marginRight:30,
    top:0,
    position:'absolute',
    flex:1,
    },
    buttonContainer: {
      width: width,
      padding:10,
      height:100,
      bottom:0,
      position:'absolute',
      flex: 1,
      fontWeight:'bold',
      fontSize:90,
    },

     customBtnText: {
        fontSize: 27,
        fontWeight: 'bold',
        color: "#fff",
        textAlign:'center'
    },

  /* Here style the background of your button */
    customBtnBG: {
    backgroundColor: "#40E0D0",
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30
    }
})