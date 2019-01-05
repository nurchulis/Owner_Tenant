import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View, Text,TouchableOpacity, TextInput, Picker, ScrollView, Image, KeyboardAvoidingView } from 'react-native';
import {Divider, CheckBox} from 'react-native-elements';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { ViewPager } from 'rn-viewpager';
import DateTimePicker from 'react-native-modal-datetime-picker';
import StepIndicator from 'react-native-step-indicator';
import Icon from 'react-native-vector-icons/Ionicons';


const labels = ["Data Instansi","Hari dan waktu aktif","Logo"];
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize:40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor:'#40E0D0',
  separatorFinishedColor: '#40E0D0',
  separatorUnFinishedColor: '#ecf0f1',
  stepIndicatorFinishedColor: '#ecf0f1',
  stepIndicatorUnFinishedColor: '#ecf0f1',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 20,
  currentStepIndicatorLabelFontSize: 25,
  stepIndicatorLabelCurrentColor: '#40E0D0',
  stepIndicatorLabelFinishedColor: '#40E0D0',
  stepIndicatorLabelUnFinishedColor: 'white',
  labelColor: '#34495e',
  labelSize: 12,
  stepCount: 3,
  currentStepLabelColor: '#40E0D0'
}
const radio_props = [
  {label: 'Senin', value: 0 },
  {label: 'Selasa', value: 1 },
  {label: 'Rabu', value: 2 },
  {label: 'Kamis', value: 3 },
  {label: 'Jumat', value: 4 },
  {label: 'Sabtu', value: 5 },
  {label: 'Minggu', value: 6 }
];

export default class Edit extends Component {
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
    isDateTimePickerVisible: false,
  };
 
  _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
 
  _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
 
  _handleDatePicked = (time) => {
    console.log('A date has been picked: ', time);
    this._hideDateTimePicker();
  };

  constructor() {
    super();
    this.state = {
      currentPage:0,
      stepCount:3,
    }
  }

  componentWillReceiveProps(nextProps,nextState) {
    if(nextState.currentPage != this.state.currentPage) {
      if(this.viewPager) {
        this.viewPager.setPage(nextState.currentPage)
      }
    }
  }
  

 handlePress = (position) => {
    this.setState({currentPage: position});
    console.log("Delete Item");
    this.viewPager.setPage(position);
  }

  render() {
     
    return (
      <View style={styles.container}>

                 <KeyboardAvoidingView style={{ flex: 1, flexDirection: 'column',justifyContent: 'center',}} behavior="padding" enabled   keyboardVerticalOffset={-200}>
        <View style={styles.stepIndicator}>
          <StepIndicator customStyles={firstIndicatorStyles}  currentPosition={this.state.currentPage} stepCount={3} labels={labels}  />
        </View>

        <ViewPager style={{flexGrow:1}} ref={(viewPager) => {this.viewPager = viewPager}} onPageSelected={(page) => {this.setState({currentPage:page.position})}}>
                  
                  {/*Halaman Data Instansi*/}
                 <View key="1" style={styles.containerPage}>        
                    {/*Nama Instansi*/}
                  <ScrollView>
                    <View style={styles.PageInstansi}>
                        <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Nama Instansi</Text>
                          <TextInput style={{height: 40, width:130, position: 'absolute', right:0, paddingBottom:20}} placeholder="BRI Cabang Pusat"
                           returnKeyType="next"
                           onSubmitEditing={() => this.dua.focus()} 
                            />
                        </View>
                    <Divider style={{ backgroundColor: 'grey' }} />
                        <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kategori</Text>  
                          <Picker
                          mode="dropdown"
                          selectedValue={this.state.language}
                          style={{height: 40,  width:160, position: 'absolute', right:0, marginTop:-10}}
                          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}
                          >
                          <Picker.Item label="Pelayanan Umum" value="java" />
                          <Picker.Item label="Pelayanan Tidak Umum" value="js" />
                          </Picker>
                        </View>
                    </View>
                    {/*Halaman Alamat*/}
                    
                  <View style={styles.PageInstansiBawah}>   
                    <Text>Alamat</Text>
                     <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Provinsi</Text>
                          <TextInput secureTextEntry={true} style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Jawa Barat"
                           ref={(input) => this.dua = input}
                           onSubmitEditing={() => this.tiga.focus()} 
                           returnKeyType="next"
                          />
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kota</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Kota Bekasi"
                          ref={(input) => this.tiga = input}
                          onSubmitEditing={() => this.empat.focus()} 
                          returnKeyType="next" 
                          />
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kecamatan</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Bintara Jaya"
                          ref={(input) => this.empat = input}
                          onSubmitEditing={() => this.lima.focus()} 
                          returnKeyType="next"
                          />
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansi}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Kode Pos</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} keyboardType="number-pad"
                           placeholder="17136"
                           ref={(input) => this.lima = input}
                           onSubmitEditing={() => this.enam.focus()} 
                           returnKeyType="next"
                           />
                        </View>
                      <Divider style={{ backgroundColor: 'grey', marginBottom:15 }} />
                      
                      <View style={styles.NamaInstansiBawah}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Alamat Lengkap</Text>
                          <TextInput style={{height: 40, position: 'absolute', right:0, paddingBottom:20}} placeholder="Jl.Raya Bintara"
                          ref={(input) => this.enam = input}
                          onSubmitEditing={() => this.tuju.focus()} 
                          returnKeyType="next"
                        
                          />
                        </View>
                      <Divider style={{ backgroundColor: 'grey' }} />
                    </View>

                  <View style={styles.PageInstansiMap}> 
                     <Text style={{color:'grey'}}>Pilih Lokasi dengan GPS</Text>    
                     <View style={styles.NamaInstansi}>
                              <Image
                              style={{width: 40, height: 40}}
                              source={require('../assets/maps.png')}
                              />
                          <TextInput style={{height: 60, width:200, position: 'absolute', right:0, paddingBottom:20}} underlineColorAndroid="true" placeholder="Jl Raya Bintara, Kel Bintara, Jaya Bekasi, Jawa Barat - 17136"
                          ref={(input) => this.tuju = input} 
                          returnKeyType="done"
                          />
                     </View>
                    </View>
                </ScrollView>

                          <TouchableOpacity style={styles.customBtnBG} onPress={() => this.handlePress(1)}>
                              <Text style={styles.customBtnText}>Lanjut</Text>
                          </TouchableOpacity>  
                  </View>
                
               

                  {/*Halaman Hari dan Waktu Aktif*/}
                  <View key="2"  style={styles.containerPageHari}>
                    <View style={styles.PageHaridanWaktu}>
                        <View style={styles.NamaInstansi}>
                          <TouchableOpacity onPress={this._showDateTimePicker}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Jam Buka</Text>
                          </TouchableOpacity>
                          <DateTimePicker
                          mode="time"
                          isVisible={this.state.isDateTimePickerVisible}
                          onConfirm={this._handleDatePicked}
                          onCancel={this._hideDateTimePicker}
                            />
                            <TouchableOpacity onPress={this._showDateTimePicker} style={{position: 'absolute', right:0, paddingBottom:20}}>
                          <Text style={{textAlign: 'left', color: '#95a5a6'}}>Jam Tutup</Text>
                          </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.PageHaridanWaktuBawah}>
                    <Text>Hari Buka</Text>

                    <View style={{padding:20}}>
                      <RadioForm
                      accessible={true}
                      radio_props={radio_props}
                      buttonColor={'#40E0D0'}
                      selectedButtonColor={'#40E0D0'}
                      initial={0}
                      labelStyle={{fontSize:17}}
                      buttonSize={5}
                      onPress={(value) => {this.setState({value:value})}}
                      />
                      </View>
                     </View> 
                        <TouchableOpacity style={styles.customBtnBGHari} onPress={() => this.handlePress(2)}>
                              <Text style={styles.customBtnText}>Lanjut</Text>
                        </TouchableOpacity>
                  </View>
              
                  {/*Halaman Logo*/}
                  <View key="3" style={styles.containerPageHari}>
                   <View style={styles.PageHaridanWaktu}>
                    <Text>Perbarui Logo Instansi</Text>
                   <View style={{justifyContent: 'center', height:200, alignItems: 'center'}}>
                       <TouchableOpacity   onPress={() => {
                        this.props.navigation.navigate('BuatLayanan', {
                        otherParam: 'Buat Layanan Baru',
                        });
                        }} style={styles.fab}>
                        <Icon
                          name='md-arrow-round-up'
                          type='evilicon'
                          color='blue'
                          size={40}
                        />
                      </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonUp}>
                             <Text style={{color:'white'}}>Pilih File</Text>
                      </TouchableOpacity>
                    </View>
                   </View> 
                        <TouchableOpacity  style={styles.customBtnBGHari}  bottomOffset={48} >
                          <Text style={styles.customBtnText}>Simpan</Text>
                        </TouchableOpacity>
                  </View>
        </ViewPager>
          </KeyboardAvoidingView>
      </View>
    );
  }

  

  renderStepIndicator = params => (
    <MaterialIcon {...getStepIndicatorIconConfig(params)} />
  );
}

const styles = StyleSheet.create({
  container: {
     top:0,
    flex: 1,
    backgroundColor: '#ecf0f1',

  },
    form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerPage:{
    padding:5,
      justifyContent: 'center',
  },
  indikator:{
  },
  stepIndicator: {
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#ffffff', 
    top:0,
  },
  //Page Data Instansi
  PageInstansi:{
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    width:'100%',
  },
  PageInstansiBawah:{
    marginTop:7,
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    width:'100%',
  },
  PageInstansiMap:{
    marginTop:7,
    backgroundColor:'#ffffff',
    padding:7,
    borderRadius:5,
    paddingBottom:60,
    width:'100%',
  },
  NamaInstansiBawah:{
    flexDirection: 'row',
    margin:10,
    paddingBottom:10,
  },
  NamaInstansi: {
    flexDirection: 'row',
    margin:10,
  },
  //Page Data Instansi

  //PageHaridanWaktu//
  containerPageHari: {
    padding:5,

  },
  PageHaridanWaktuBawah:{
    backgroundColor:'#ffffff',
    padding:5,
    marginTop:10,
    width:'100%',
    borderRadius:5,
  },
  customBtnBGHari: {
    backgroundColor: "#40E0D0",
    paddingHorizontal: 30,
    alignSelf:'center',
    width:'100%',
    paddingVertical: 5,
    borderRadius: 30,
    marginTop:20,
    bottom:10,
    position:'absolute',
  },
  PageHaridanWaktu:{
    backgroundColor:'#ffffff',
    padding:5,
    width:'100%',
  },
  //End PageHaridanWaktu
  page: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
    customBtnBG: {
    backgroundColor: "#40E0D0",
    paddingHorizontal: 30,

    alignSelf:'center',
    width:'100%',
    paddingVertical: 5,
    borderRadius: 30,
    bottom:10,

    },
        customBtnText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#fff",
        textAlign:'center'
    },
    fab: {
    width: 66,
    height: 66,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 35,
    elevation: 8,
    },
    buttonUp:{
    width: 66,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 5,
    width:100,
    elevation: 8,
    marginTop:10,
   
    },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  } 
});