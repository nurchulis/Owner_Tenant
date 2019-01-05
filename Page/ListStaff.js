import React, { Component } from 'react'
import { Text, View, Button, TouchableOpacity, Image, StyleSheet, ScrollView, Props } from 'react-native'
import { ListItem, chevron, Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import Swipeout from 'react-native-swipeout'
console.disableYellowBox = true;

var swipeoutBtns =  
    [
      {
        component: (
          <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                 borderRadius:50,
              }}
          >
            <Image source={require('../assets/delete.png')} />
          
          </View>
        ),
        underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
        onPress: () => {
          console.log("Delete Item");
        },
        backgroundColor:'#ecf0f1',
        autoClose:'true',

      },
    ];

class ListStaff extends Component {
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
  

constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

   alertItemName = (item) => {
      alert(item.name)
   }
   render() {
      return (
      <View style={styles.tengah}>
  
         <ScrollView>
            { 
               this.state.data.map((item, index) => (
                  <Swipeout right={swipeoutBtns}>
      <ListItem
        containerStyle={styles.container} 
        key={item.email}
       // leftElement={<Text style={styles.number}>{item.no}</Text>}
        leftAvatar={{ size:"medium", title: item.name.first[0], source: { uri: item.picture.thumbnail } }}
        title={<Text style={styles.nama}>{item.name.first}</Text>}
        subtitle={
          <Text style={styles.jabatan}>{item.location.state}</Text>
        }
        rightElement={<Text style={styles.cir}>.</Text>}
        bottomDivider={true}
        >
     <View style = {styles.lineStyle} />
     </ListItem>
      </Swipeout>
               ))
            }
         </ScrollView>
        
           <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('AddStaff', {
              otherParam: 'Undang Staff',
            });
          }}
          style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>

         </View> 


      )
   }
}
export default ListStaff
const styles = StyleSheet.create ({
   tengah: {
     
    backgroundColor:'white',
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
   jabatan: {
      color: 'grey'
   },
   nama: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#40E0D0'
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
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  },
   swipeoutView: {
    height: 50,
    backgroundColor:'red',
  }
})