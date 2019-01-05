import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Props } from 'react-native'
import { ListItem, chevron, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';



class ListLayanan extends Component {
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
   state = {
      names: [
         {
            id: 0,
            no:'1',
            nama: 'Costumer Service',
         },
         {
            id: 1,
            no:'2',
            nama: 'Teller',
         },
         {
            id: 2,
            no:'3',
            nama: 'Satpam',
         }
      ]
   }
   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
      <View style={styles.tengah}>
  
         <ScrollView>
            {
               this.state.names.map((item, index) => (
                
      <ListItem
        containerStyle={styles.container} 
        key={item.id}
        leftElement={<Text style={styles.number}>{item.no}</Text>}
        title={<Text style={styles.nama}>{item.nama}</Text>}
        rightElement={<Icon name='md-create' color='#f1c40f' size={20} />}
        bottomDivider={true}
        >
     <View style = {styles.lineStyle} />
     </ListItem>
               ))
            }
         </ScrollView>
        
           <TouchableOpacity   onPress={() => {
            this.props.navigation.navigate('BuatLayanan', {
              otherParam: 'Buat Layanan Baru',
            });
          }} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>

         </View> 


      )
   }
}
export default ListLayanan
const styles = StyleSheet.create ({
   tengah: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor:'white',
    position:'relative',
   },
   container: {
      paddingLeft: 20, 
      paddingRight:20,
      backgroundColor:'white',

   },
  
  heading: {
    height: 60,
    backgroundColor: 'white',
    marginTop:20,
    alignItems: 'center',
    justifyContent: 'center',
     elevation: 3,
  },
  number: {
   fontSize:15,
   color:'grey',
  },
  headingTest: {
    fontSize: 20,
    color: '#40E0D0',
    fontWeight: 'bold',
  },
   nama: {
      fontSize: 18,
      color: '#34495e'
   },
   cir: {
     marginTop:-45, 
     fontSize:60,
     fontWeight: 'bold',
     color: '#12F25D',

   },
    lineStyle:{
        borderWidth: 0.5,
        borderColor:'black',
        margin:5
   },
    fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#12F25D',
    borderRadius: 30,
    elevation: 8,
    bottom:20,
    
    flex:1,
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
})